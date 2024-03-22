/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  const devAllowedOrigins = [
    'super-duper-umbrella-r7vqwpp5q9whp4r5-3000.app.github.dev',
    'localhost:3000'
  ];

  return {
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
    experimental:
      phase === PHASE_DEVELOPMENT_SERVER
        ? {
            serverActions: {
              allowedOrigins: [
                'super-duper-umbrella-r7vqwpp5q9whp4r5-3000.app.github.dev',
                'localhost:3000'
              ]
            }
          }
        : undefined
  };
};

module.exports = nextConfig;
