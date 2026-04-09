/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Đã lược bỏ Google, chỉ giữ lại script cần thiết cho Vercel và Font
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' va.vercel-scripts.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self' va.vercel-scripts.com;",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            // Đổi sang cái này để lấy trọn điểm từ Mozilla
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/thue-xe-hop-dong",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// // next.config.mjs

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/thue-xe-hop-dong",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
