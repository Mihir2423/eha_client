const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const id = req.query.id;
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          username: true,
          email: true,
          phoneNumber: true,
          firstName: true,
          lastName: true,
          landlineNo: true,
          age: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PATCH") {
    try {
      const {
        id,
        data: {
          username,
          email,
          phoneNumber,
          firstName,
          lastName,
          landlineNo,
          dateOfBirth,
          gender,
          age,
        },
      } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Missing user id in the request body" });
      }

      const updatedUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          username,
          email,
          phoneNumber,
          firstName,
          lastName,
          landlineNo,
          dateOfBirth,
          gender,
          age,
        },
      });

      return res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Handle other HTTP methods
  res.status(405).json({ error: "Method Not Allowed" });
}
