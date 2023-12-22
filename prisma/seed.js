// seed.js
const { PrismaClient } =  require('@prisma/client');

const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const seedDatabase = async () => {

  try {
    // Seed users
  //  const user1 = await prisma.User.create({
  //     data: {
  //       username: 'cam',
  //       email: 'c@c.com',
  //       phoneNumber: '1234567890',
  //       password: await bcrypt.hash('test',10) , //password123
  //     },
  //   });

    // console.log("user created: ",user1)

    const products = await prisma.product.createMany({
      data: [
        
        {
          name: 'PIXMA G 1737',
          price: 20,
          image: 'https://asia.canon/media/image/2022/10/11/a5983fdeba204322849764ed6649f324_G1x30_blk_AS_FR_cl_en_362.png',
          description: 'Description for Product 1',
          slug: 'product-1',
          thumbnail: 'https://asia.canon/media/image/2022/10/11/a5983fdeba204322849764ed6649f324_G1x30_blk_AS_FR_cl_en_362.png',
          originalPrice: 30,
          Brand: 'Canon',
          rating: 5,
        },{
          name: "PIXMA G 2770",
            price: 30,
            image: "https://asia.canon/media/image/2022/10/11/a5983fdeba204322849764ed6649f324_G1x30_blk_AS_FR_cl_en_362.png",
           description: "Description for Product 2",
           slug: "product-2",
            thumbnail: "https://asia.canon/media/image/2022/10/11/a5983fdeba204322849764ed6649f324_G1x30_blk_AS_FR_cl_en_362.png",
            originalPrice: 40,
            Brand: "Canon",
            rating: 4,
            
        },{
          name: "PIXMA G 3730",
          price: 40,
          image: "https://in.canon/media/image/2022/12/28/026cfbd8a48142a08080e8655a7b8ecd_G3x30_blk_AS_FR_cl_en_362.png",
         description: "Description for Product 3",
         slug: "product-3",
          thumbnail: "https://in.canon/media/image/2022/12/28/026cfbd8a48142a08080e8655a7b8ecd_G3x30_blk_AS_FR_cl_en_362.png",
          originalPrice: 50,
          Brand: "Canon",
          rating: 4,
        },
        {
          name: "PIXMA G 3770",
          price: 50,
          image: "https://in.canon/media/image/2022/10/11/642bc961bce44936ab793c26e52b4661_G3x70_blk_AS_FR_cl_en_362.png",
         description: "Description for Product 4",
         slug: "product-4",
          thumbnail: "https://in.canon/media/image/2022/10/11/642bc961bce44936ab793c26e52b4661_G3x70_blk_AS_FR_cl_en_362.png",
          originalPrice: 60,
          Brand: "Canon",
          rating: 5,
        },{
          name: "FS 1040",
            price: 60,
            image: "https://www.kyoceradocumentsolutions.com/in/en/products/printer/ecosys-fs1060dn/assets/images/ecosys-fs-1040.jpg",
           description: "Description for Product 5",
           slug: "product-5",
            thumbnail: "https://www.kyoceradocumentsolutions.com/in/en/products/printer/ecosys-fs1060dn/assets/images/ecosys-fs-1040.jpg",
            originalPrice: 70,
            Brand: "Kyocera",
            rating: 4,
        },{
          name: "P 2040 dn/dw",
            price: 70,
            image: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/printers/ECOSYSP2040DN/printers-540x540-ecosysP2040dn.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1572958932982.png",
           description: "Description for Product 6",
           slug: "product-6",
            thumbnail: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/printers/ECOSYSP2040DN/printers-540x540-ecosysP2040dn.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1572958932982.png",
            originalPrice: 80,
            Brand: "Kyocera",
            rating: 4,
        },{
          name: "P 3260dn",
          price: 80,
          image: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/printers/ECOSYSP3260DN/square-540x540-product-information-ECOSYS-3260dn.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1573037050816.png",
         description: "Description for Product 7",
         slug: "product-7",
          thumbnail: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/printers/ECOSYSP3260DN/square-540x540-product-information-ECOSYS-3260dn.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1573037050816.png",
          originalPrice: 90,
          Brand: "Kyocera",
          rating: 5,
        },{
          name: "FS 1025mfp",
          price: 90,
          image: "https://www.kyoceradocumentsolutions.com/in/en/products/mfp/ecosys-fs1125mfp/assets/images/ecosys-fs-1020mfp.jpg",
         description: "Description for Product 8",
         slug: "product-8",
          thumbnail: "https://www.kyoceradocumentsolutions.com/in/en/products/mfp/ecosys-fs1125mfp/assets/images/ecosys-fs-1020mfp.jpg",
          originalPrice: 100,
          Brand: "Kyocera",
          rating: 3,
        },
        {
          name: "M 3660dn/M 3860idn",
          price: 100,
          image: "https://m.media-amazon.com/images/I/71TxHX8ipeL.SX679.jpg",
         description: "Description for Product 9",
         slug: "product-9",
          thumbnail: "https://m.media-amazon.com/images/I/71TxHX8ipeL.SX679.jpg",
          originalPrice: 110,
          Brand: "Kyocera",
          rating: 5,
        },{
          name: "M 5526cdw",
          price: 110,
          image: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/mfp/ECOSYSM5526CDW/mfp-540x540-angled-ecosysM5526cdw_WITH-GESTURE.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1572519805560.png",
         description: "Description for Product 10",
         slug: "product-10",
          thumbnail: "https://www.kyoceradocumentsolutions.eu/renditions/content/dam/kyocera/common/products/mfp/ECOSYSM5526CDW/mfp-540x540-angled-ecosysM5526cdw_WITH-GESTURE.png/jcr%3Acontent/renditions/cq5dam.resized.img.540.medium.time1572519805560.png",
          originalPrice: 120,
          Brand: "Kyocera",
          rating: 4,
        },{
          name: "HP Ink Advantage 2776 Printer, Copy, Scan, Dual Band WiFi, Bluetooth, USB, Simple Setup Smart App, Ideal for Home.",
            price: 1455,
            image: "https://m.media-amazon.com/images/I/31sD3I11vbL.SX300_SY300_QL70_FMwebp.jpg",
           description: "HP Ink Advantage 2776 Printer, Copy, Scan, Dual Band WiFi, Bluetooth, USB, Simple Setup Smart App, Ideal for Home.",
           slug: "Printer Dummy",
            thumbnail: "https://m.media-amazon.com/images/I/31sD3I11vbL.SX300_SY300_QL70_FMwebp.jpg",
            originalPrice: 12312,
            Brand: "HP",
            rating: 4,
        },{
          name: "PIXMA G 1730",
            price: 0,
            image: "https://m.media-amazon.com/images/I/51Q+WJ6+JrL.SL1500.jpg",
           description: "Best Suited for Document and Photo Printng\tMono / Colour\tPriter+Photo Print\tGI 71S\tReplacable\tRefillable Ink Tank Bottle\t A4- 11 Prints (Mono) /A4-6 Prints (Colour) \t4800x1200 dpi",
           slug: "PIXMA-1730",
            thumbnail: "https://m.media-amazon.com/images/I/51Q+WJ6+JrL.SL1500.jpg",
            originalPrice: 1500,
            Brand: "PIXMA",
            rating: 4,
        }

        
      ],
    });

    console.log(`${products.count} products seeded successfully!`);

    
    // Seed other entities (products, orders, categories, etc.) if needed

    // console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after seeding
  }
};

seedDatabase();
