// seed.js
const { PrismaClient } =  require('@prisma/client');

const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const seedDatabase = async () => {

  try {
    // Seed users
    const user1 = await prisma.user.create({
      data: {
        username: 'cam',
        email: 'c@c.com',
        password: await bcrypt.hash('password123',10) , //password123
      },
    });

    

    // Seed profiles
    await prisma.profile.create({
      data: {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'MALE',
        dateOfBirth: new Date('1990-01-01'),
        phoneNumber: 1234567890,
        id: user1.id,
        email: user1.email,
        landlineNo: "1234567890",
        address: "1234 Main St",
        
        userAddress: '1234 Main St',

      },
    });

    
    // Seed other entities (products, orders, categories, etc.) if needed

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after seeding
  }
};

seedDatabase();
