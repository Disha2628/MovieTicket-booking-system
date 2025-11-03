const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Lotusgirl@123',
  database: 'cinema_database'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
