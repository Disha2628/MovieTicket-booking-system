const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || "123456"; // Use environment variable in production

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken
};
