/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname :'encrypted-tbn0.gstatic.com'
      },
      {
        hostname: 'cdn.undiksha.ac.id'
      }
    ]
  },
};

export default nextConfig;
