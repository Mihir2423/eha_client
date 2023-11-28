export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { identifier, password } = req.body;
  
      try {
        // Implement your login logic using Prisma
        const user = await prisma.user.findUnique({ where: { email: identifier } });
        if(!user) return console.log("user not found")
  
        res.status(200).json({ message: 'Login success' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }