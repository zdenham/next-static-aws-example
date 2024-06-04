/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  rewrites: async () => {
    return [
      {
        source: '/id/:id',
        destination: '/id/id',
      },
    ];
  },
};

export default nextConfig;
