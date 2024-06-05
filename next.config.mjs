export default (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    output: phase === 'phase-production-build' ? 'export' : 'standalone',
  };
  return nextConfig;
};
