const { verifyToken } = require('../config/jwt');

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: 'Admin access token required' });
    }

    const decoded = verifyToken(token);

    // Expect JWT payload to include role
    if (!decoded || decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Admin only' });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired admin token' });
  }
};

module.exports = adminAuth;

