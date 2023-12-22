// pages/api/submit-address.js

import { prisma } from "@/prisma/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      id,
      name,
      address1,
      address2,
      landmark,
      city,
      state,
      zip,
      country,
      telephone,
      email,
    } = req.body;

    try {
      // Save the form data to your database using Prisma
      const savedAddress = await prisma.Address.create({
        data: {
          name,
          address1,
          address2,
          landmark,
          city,
          state,
          zip,
          country,
          telephone,
          email,
          userId: parseInt(id),
        },
      });
      

      console.log(savedAddress);
      res.status(201).json(savedAddress);
    } catch (error) {
      console.error("API error:", error); // Log the error details
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
