import { prisma } from "@/prisma/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      price,
      image,
      description,
      slug,
      thumbnail,
      originalPrice,
      brand,
      rating,
    } = req.body;
    try {
      const product = await prisma.Product.create({
        data: {
          name,
          price,
          image,
          description,
          slug,
          thumbnail,
          originalPrice,
          Brand: brand,
          rating,
        },
      });
      res.status(200).json({ data: product });
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('slug')) {
        // Handle unique constraint violation for slug
        res.status(400).json({ error: 'Slug must be unique' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  } else if (req.method === "GET") {
    // Handle GET request
    try {
      const products = await prisma.Product.findMany();
      res.status(200).json({ data: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
