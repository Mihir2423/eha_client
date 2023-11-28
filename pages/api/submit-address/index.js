// pages/api/submit-address.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      name,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      telephone,
      email,
    } = req.body;

    try {
      // Save the form data to your database using Prisma
      const savedAddress = await prisma.address.create({
        data: {
          name,
          address1,
          address2,
          city,
          state,
          zip,
          country,
          telephone,
          email,
        },
      });

      res.status(201).json(savedAddress);
    } catch (error) {
      console.error('API error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
