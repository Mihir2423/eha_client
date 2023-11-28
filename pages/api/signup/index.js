import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, email, password,phone } = req.body;
  
      try {
        const user = await prisma.User.create({
          data: {
            username,
            email,
            password,
            phone
          },
        });
        res.status(201).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }