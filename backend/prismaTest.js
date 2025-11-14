const { PrismaClient } = require('./src/generated');

const prisma = new PrismaClient();

async function test() {
  try {
    const movies = await prisma.movie.findMany();
    console.log("Movies:", movies.length);
  } catch (err) {
    console.error("ERROR:", err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
