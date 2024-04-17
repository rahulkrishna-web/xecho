/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['nxtnet.in', '*.nxtnet.in']
        }
      }
};

export default nextConfig;
