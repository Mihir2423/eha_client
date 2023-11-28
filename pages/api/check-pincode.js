

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { pincode } = req.body;
  
      try {
        // Perform pincode check logic here
        const isAvailable = await checkPincode(pincode);
  
        res.status(200).json({ available: isAvailable });
      } catch (error) {
        console.error('Pincode check error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  