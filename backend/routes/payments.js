const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

// ✅ Validate Razorpay ENV variables at startup
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error("❌ Razorpay ENV variables missing!");
  console.error("Add these inside backend/.env:");
  console.error("RAZORPAY_KEY_ID=xxxxxxxxx");
  console.error("RAZORPAY_KEY_SECRET=xxxxxxxx");
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// --------------------------------------------------
// ✅ Create Razorpay Order
// --------------------------------------------------
router.post("/create-order", async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    };

    console.log("🔵 Creating Razorpay Order:", options);

    const order = await razorpay.orders.create(options);

    console.log("✅ Razorpay Order Created:", order);
    return res.json({ success: true, order });

  } catch (error) {
    console.error("❌ Error creating Razorpay order:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
});

// --------------------------------------------------
// ✅ Verify Razorpay Payment
// --------------------------------------------------
router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    console.log("🔵 Verifying payment:", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification parameters",
      });
    }

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    console.log("Generated Signature:", generated_signature);
    console.log("Received Signature:", razorpay_signature);

    if (generated_signature === razorpay_signature) {
      console.log("✅ Payment Verified");
      return res.json({ success: true, message: "Payment verified successfully" });
    }

    console.warn("⚠️ Payment Verification Failed");
    return res.status(400).json({
      success: false,
      message: "Invalid signature. Payment verification failed",
    });

  } catch (error) {
    console.error("❌ Error verifying payment:", error);
    return res.status(500).json({
      success: false,
      message: "Error verifying payment",
      error: error.message,
    });
  }
});

module.exports = router;
