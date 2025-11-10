const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../config/database");
const { generateToken } = require("../config/jwt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const twilio = require("twilio");

// Temporary OTP storage (in production, use Redis or DB)
const otpStore = new Map();

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

// ✅ FORGOT PASSWORD - SEND OTP
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ error: "Email or phone number is required" });
    }

    let query = "";
    let params = [];

    if (email && phone) {
      query = "SELECT * FROM customer WHERE email = ? AND Phone_No = ?";
      params = [email.toLowerCase(), phone];
    } else if (email) {
      query = "SELECT * FROM customer WHERE email = ?";
      params = [email.toLowerCase()];
    } else if (phone) {
      query = "SELECT * FROM customer WHERE Phone_No = ?";
      params = [phone];
    }

    const [rows] = await pool.execute(query, params);

    if (rows.length === 0) {
      if (email && phone) {
        return res.status(404).json({ error: "User with this email and phone number does not exist" });
      } else if (email) {
        return res.status(404).json({ error: "User with this email does not exist" });
      } else if (phone) {
        return res.status(404).json({ error: "User with this phone number does not exist" });
      }
    }

    const user = rows[0];
    const otp = crypto.randomInt(100000, 999999).toString();

    // Store OTP with user identifier and expiration (5 minutes)
    const userKey = email || phone;
    otpStore.set(userKey, {
      otp,
      userId: user.customer_Id,
      expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes
    });

    console.log(`OTP for user ${user.customer_Id}: ${otp}`);

    // Send OTP via email if email provided
    if (email) {
      // For demo purposes, skip actual email sending and just log the OTP
      console.log(`OTP for email ${email}: ${otp}`);
      // In production, uncomment and configure the transporter:
      /*
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Set in .env
          pass: process.env.EMAIL_PASS // Set in .env
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
      });
      */
    }

    // Send OTP via SMS if phone provided
    if (phone) {
      // Ensure phone number is in E.164 format for Twilio
      let formattedPhone = phone;
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+91' + formattedPhone; // Default to India if no country code
      }

      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

      if (!accountSid || !authToken || !twilioPhoneNumber) {
        console.error('Twilio credentials not configured');
        return res.status(500).json({ error: 'SMS service not configured' });
      }

      const client = twilio(accountSid, authToken);

      try {
        await client.messages.create({
          body: `Your OTP for password reset is: ${otp}`,
          from: twilioPhoneNumber,
          to: formattedPhone
        });
        console.log(`OTP sent to ${formattedPhone}`);
      } catch (smsError) {
        console.error('Error sending SMS:', smsError);
        return res.status(500).json({ error: 'Failed to send OTP via SMS' });
      }
    }

    res.json({ message: "OTP sent successfully" }); // Remove otp in production
  } catch (error) {
    console.error("Error during forgot password:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ VERIFY OTP AND RESET PASSWORD
router.post("/reset-password", async (req, res) => {
  try {
    const { email, phone, otp, newPassword } = req.body;

    if (!otp || !newPassword) {
      return res.status(400).json({ error: "OTP and new password are required" });
    }

    // Verify OTP from stored OTP
    const userKey = email || phone;
    const storedOtpData = otpStore.get(userKey);

    if (!storedOtpData) {
      return res.status(400).json({ error: "OTP not found or expired. Please request a new OTP." });
    }

    if (Date.now() > storedOtpData.expiresAt) {
      otpStore.delete(userKey); // Clean up expired OTP
      return res.status(400).json({ error: "OTP has expired. Please request a new OTP." });
    }

    if (storedOtpData.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP. Please try again." });
    }

    // OTP is valid, proceed with password reset
    let query = "";
    let params = [];

    if (email && phone) {
      query = "UPDATE customer SET Password = ? WHERE email = ? AND Phone_No = ?";
      params = [await bcrypt.hash(newPassword, 10), email.toLowerCase(), phone];
    } else if (email) {
      query = "UPDATE customer SET Password = ? WHERE email = ?";
      params = [await bcrypt.hash(newPassword, 10), email.toLowerCase()];
    } else if (phone) {
      query = "UPDATE customer SET Password = ? WHERE Phone_No = ?";
      params = [await bcrypt.hash(newPassword, 10), phone];
    }

    const [result] = await pool.execute(query, params);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Clean up used OTP
    otpStore.delete(userKey);

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error during reset password:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
