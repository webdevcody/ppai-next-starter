/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/changelog",
        destination: `https://projectplannerai.com/changelog/${process.env.NEXT_PUBLIC_PROJECT_PLANNER_ID}`,
      },
    ];
  },
};

export default nextConfig;
