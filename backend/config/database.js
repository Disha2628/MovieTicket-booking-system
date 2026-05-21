require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,
    ca: fs.readFileSync('./ca.pem')
  }
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;