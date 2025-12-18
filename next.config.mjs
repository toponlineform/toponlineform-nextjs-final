/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* Since you want maximum SEO and performance, 
     trailingSlash helps with consistent canonical URLs across Google Search. */
  trailingSlash: true,
  images: {
    /* Set to unoptimized if you plan to do a static export, 
       otherwise Vercel handles this automatically. */
    unoptimized: true, 
  },
  /* Next.js 15 specific optimizations */
  experimental: {
    // any experimental features can go here
  }
};

export default nextConfig;
