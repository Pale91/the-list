/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/the-list-dc90e.appspot.com/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['super-duper-umbrella-r7vqwpp5q9whp4r5-3000.app.github.dev', 'localhost:3000'],
    }
  }
};

module.exports = nextConfig;
