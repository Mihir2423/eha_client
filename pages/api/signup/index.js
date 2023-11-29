import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, email, password,phone } = req.body;
  
      if (!email || !password) {
        return new NextResponse("Please fill all the required fields", {
          status: 400,
        });
      }

      try {

        const existingUser = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
    
        if (existingUser) {
          return new NextResponse("User already exists with that email.", {
            status: 400,
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.User.create({
          data: {
            username:username,
            email:email,
            password:hashedPassword,
            phone:phone,
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