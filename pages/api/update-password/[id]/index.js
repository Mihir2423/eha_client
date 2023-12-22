import { prisma } from "@/prisma/index";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    const { id, data } = req.body;
    console.log(id, data)

    if (!id || !data || !data.password) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const updatedUser = await prisma.User.update({
      where: {
        id: parseInt(id),
      },
      data: {
        password: hashedPassword,
      },
    });

    return res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
