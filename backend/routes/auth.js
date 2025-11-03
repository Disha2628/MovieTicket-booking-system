const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../config/database");
const { generateToken } = require("../config/jwt");

// ✅ REGISTER
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, phn_no, password } = req.body;

    if (!first_name || !last_name || !email || !phn_no || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const normalizedEmail = email.toLowerCase();

    const [existing] = await pool.execute(
      "SELECT * FROM customer WHERE email = ?",
      [normalizedEmail]
    );

    if (existing.length > 0) {
      return res.status(409).json({ error: "Email already registered" });
    }

    console.log("Password from frontend:", password);

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.execute(
      `INSERT INTO customer (F_Name, L_Name, email, Phone_No, Password, created_at)
       VALUES (?, ?, ?, ?, ?, NOW())`,
      [first_name, last_name, normalizedEmail, phn_no, hashedPassword]
    );

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("SQL Error during REGISTER:", error);
    res.status(500).json({ error: error.message });
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const normalizedEmail = Email.toLowerCase();

    const [rows] = await pool.execute(
      "SELECT * FROM customer WHERE email = ?",
      [normalizedEmail]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];

    console.log("Password from frontend:", Password);
    console.log("Hashed password from DB:", user.Password);

    const validPassword = await bcrypt.compare(Password, user.Password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateToken({ id: user.customer_Id, email: user.email });

    res.json({
      message: "Login successful",
      user: {
        id: user.customer_Id,
        first_name: user.F_Name,
        last_name: user.L_Name,
        email: user.email,
      },
      token: token,
    });
  } catch (error) {
    console.error("SQL Error during LOGIN:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
