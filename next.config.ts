import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://54.161.63.190:4000'],
};

export default nextConfig;
