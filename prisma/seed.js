// seed.js
const { PrismaClient } =  require('@prisma/client');

const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const seedDatabase = async () => {

  try {
    // Seed users
   const user1 = await prisma.User.create({
      data: {
        username: 'cam',
        email: 'c@c.com',
        phoneNumber: '1234567890',
        password: await bcrypt.hash('test',10) , //password123
      },
    });

    console.log("user created: ",user1)

    

    
    // Seed other entities (products, orders, categories, etc.) if needed

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after seeding
  }
};

seedDatabase();
