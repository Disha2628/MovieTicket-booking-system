require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

function executeTrigger() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }

    const sqlFile = path.join(__dirname, 'trigger_decrement_seats.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    console.log('Executing trigger SQL...');
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error executing trigger:', error);
      } else {
        console.log('Trigger created successfully!');
      }
      connection.end();
    });
  });
}

executeTrigger();
