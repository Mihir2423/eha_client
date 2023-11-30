import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
const id = req.query.id;
console.log("product id",id)
  if(req.method === 'GET'){
    try {
      const product = await prisma.Product.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}