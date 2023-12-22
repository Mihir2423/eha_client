import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case "PUT":
      try {
        const { id } = query;
        const { firstName, lastName, email, phoneNo, landlineNo, gender, dateOfBirth, age } = req.body;

        const updatedProfile = await prisma.profile.update({
          where: { id: parseInt(id) }, // Assuming the profile ID is a number
          data: {
            firstName,
            lastName,
            email,
            phoneNo,
            landlineNo,
            gender,
            dateOfBirth,
            age,
          },
        });

        res.status(200).json({ success: true, data: updatedProfile });
      } catch (error) {
        console.error("API error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
      break;

    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}
