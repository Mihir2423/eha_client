// import { PrismaClient } from "@prisma/client";

import { prisma } from "@/prisma/index";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const product = await prisma.Product.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      // console.log(product)
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
