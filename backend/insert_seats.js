const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lotusgirl@123',
  database: 'cinema_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function insertSeatsForShows() {
  try {
    // Get all shows from 2 to 198
    const [shows] = await pool.execute('SELECT Show_Id, Theatre_Id, Screen_no FROM shows WHERE Show_Id > 1 ORDER BY Show_Id');

    for (const show of shows) {
      const { Show_Id, Theatre_Id, Screen_no } = show;

      // Get layout for this screen
      const [layoutRows] = await pool.execute('SELECT Layout_structure FROM screens WHERE theatre_Id = ? AND screen_no = ?', [Theatre_Id, Screen_no]);
      if (layoutRows.length === 0) {
        console.log(`No layout found for theatre ${Theatre_Id}, screen ${Screen_no}`);
        continue;
      }

      let layout = layoutRows[0].Layout_structure;
      if (typeof layout === 'string') {
        layout = JSON.parse(layout);
      }
      const { rows, columns } = layout;

      // Generate seat names
      const seats = [];
      for (let r = 0; r < rows; r++) {
        const rowLetter = String.fromCharCode(65 + r); // A, B, C, ...
        for (let c = 1; c <= columns; c++) {
          const colStr = c.toString().padStart(2, '0');
          const seatName = `${rowLetter}${colStr}`;
          seats.push([Show_Id, seatName, 'Regular', 'available']);
        }
      }

      // Insert seats one by one to avoid bulk insert issues
      for (const seat of seats) {
        const insertQuery = 'INSERT INTO seats (show_id, seat_name, seat_type, status) VALUES (?, ?, ?, ?)';
        await pool.execute(insertQuery, seat);
      }

      console.log(`Inserted ${seats.length} seats for show ${Show_Id}`);
    }

    console.log('All seats inserted successfully');
  } catch (error) {
    console.error('Error inserting seats:', error);
  } finally {
    await pool.end();
  }
}

insertSeatsForShows();
