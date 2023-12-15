import { prisma } from "@/prisma/index";
const data =[
  
       
   
]
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
    if (req.method === "GET") {
      try {
        const { name, sortBy } = req.query;
  
        let products;
  
        if (name) {
          // If name parameter is provided, filter by name
          products = await prisma.Product.findMany({
            where: {
              id,
              name: {
                contains: name,
                mode: "insensitive", // Case-insensitive search
              },
            },
          });
        } else {
          // If no name parameter, fetch all products
          products = await prisma.Product.findMany();
        }
  
        // Sort by a specified key (e.g., price, rating)
        if (sortBy) {
          products.sort((a, b) => a[sortBy] - b[sortBy]);
        }
  
        res.status(200).json({ data: products });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
}
