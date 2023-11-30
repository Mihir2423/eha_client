import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password, phoneNumber } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill all the required fields" });
    }

    try {
      // Check if a user with the provided email already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User already exists with that email." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await prisma.User.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
          phoneNumber: phoneNumber,
        },
      });

      // Respond with the created user
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }

  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, data: users });
  }

  if (req.method === "PATCH") {
    const { 
      id, 
      username, 
      email, 
      phoneNumber, 
      firstName, 
      lastName, 
      landlineNo,
      dateOfBirth,
      gender,
      age

    } =
      req.body;
      console.log(req.body)
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        landlineNo: landlineNo,
        dateOfBirth: dateOfBirth,
        gender:gender,
        age:age
      },
    });
    res.status(200).json({ success: true, data: updatedUser });
  }
}
