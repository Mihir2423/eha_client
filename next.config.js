/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","localhost","asia.canon","in.canon","www.kyoceradocumentsolutions.com","www.kyoceradocumentsolutions.eu","m.media-amazon.com"],
    
  },
};

module.exports = nextConfig;
