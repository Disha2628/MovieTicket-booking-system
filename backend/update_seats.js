const { PrismaClient } = require('./src/generated');

const prisma = new PrismaClient();

async function updateSeats() {
  try {
    // Get all distinct rows from seats
    const rows = await prisma.seat.findMany({
      select: {
        seat_name: true,
      },
      distinct: ['seat_name'],
    });

    // Extract unique row letters (first character of seat_name)
    const uniqueRows = [...new Set(rows.map(seat => seat.seat_name.charAt(0)))].sort();

    console.log('Unique rows:', uniqueRows);

    // Assign types based on logic
    const rowTypes = {};
    const numRows = uniqueRows.length;
    uniqueRows.forEach((row, index) => {
      if (index < 2) {
        rowTypes[row] = { type: 'platinum', price: 280 };
      } else if (index >= numRows - 3) {
        rowTypes[row] = { type: 'silver', price: 180 };
      } else {
        rowTypes[row] = { type: 'gold', price: 220 };
      }
    });

    console.log('Row types:', rowTypes);

    // Get all seats
    const seats = await prisma.seat.findMany();

    // Update each seat
    for (const seat of seats) {
      const row = seat.seat_name.charAt(0);
      const { type, price } = rowTypes[row];
      await prisma.seat.update({
        where: { seat_id: seat.seat_id },
        data: {
          seat_type: type,
          seat_price: price,
        },
      });
    }

    console.log('All seats updated successfully.');
  } catch (error) {
    console.error('Error updating seats:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateSeats();
