const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const id = req.query.id;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(user);

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
      age,
    } = req.body;
    console.log(req.body);
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
        gender: gender,
        age: age,
      },
    });
    res.status(200).json({ success: true, data: updatedUser });
  }
}
