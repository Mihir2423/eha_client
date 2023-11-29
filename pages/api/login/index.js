// pages/api/login.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // if (req.method === 'POST') {
  //   const { identifier, password } = req.body;

  //   try {
  //     // Check if the user with the given email exists
  //     const user = await prisma.user.findUnique({ where: { email: identifier } });

  //     if (!user) {
  //       // User not found
  //       return res.status(401).json({ error: 'Invalid credentials' });
  //     }

  //     // Verify the password (You should use a secure password hashing library like bcrypt)
  //     if (user.password !== password) {
  //       // Incorrect password
  //       return res.status(401).json({ error: 'Invalid credentials' });
  //     }

  //     // If the password is correct, you can generate a token for authentication
  //     // You might want to use a library like jsonwebtoken or a dedicated authentication library

  //     res.status(200).json({ message: 'Login success', user });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // } else {
  //   res.status(405).json({ error: 'Method Not Allowed' });
  // }
}
