import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "PUT":
      const { data } = req.body;
      const {
        firstName,
        lastName,
        gender,
        age,
        phoneNo,
        landlineNo,
        dateOfBirth
      } = data;
const email = req.query.email;
      try {
        // Assuming you have a way to identify the profile to update, for example, using a ProfileId
        const profileId = req.query.userId; // Adjust this according to your route configuration
// console.log(profileId)
        const updatedProfile = await prisma.profile.update({
          where: { id: parseInt(profileId) },
          data: {
            firstName,
            lastName,
            gender,
            age,
            phoneNo,
            landlineNo,
            dateOfBirth,
            email:email,
          },
        });

        res.status(200).json({ success: true, data: updatedProfile });
      } catch (error) {
        console.error("API error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
      break;

    case "GET":
      const profiles = await prisma.profile.findMany();
      res.status(200).json({ success: true, data: profiles });
      break;

    default:
      res.status(400).json({ success: false, error: "Invalid Request Method" });
      break;
  }
}
