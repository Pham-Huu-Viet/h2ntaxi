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
          // 1. Giải quyết lỗi Content Security Policy (-25 điểm)
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-size 'self' fonts.gstatic.com data:; img-src 'self' data: *.googletagmanager.com *.google-analytics.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com va.vercel-scripts.com;",
          },
          // 2. Giải quyết lỗi X-Frame-Options (-20 điểm)
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // 3. Giải quyết lỗi X-Content-Type-Options (-5 điểm)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // 4. Giải quyết lỗi Referrer Policy (Đề xuất thêm của Mozilla)
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // 5. Nâng cấp HSTS lên mức Preload (Tăng điểm cộng)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // 6. Chặn các tính năng không cần thiết để bảo mật quyền riêng tư
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
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
