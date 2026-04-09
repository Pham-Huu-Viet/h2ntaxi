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
            // Cấu hình này cho phép: Google Analytics, Vercel, Inline Scripts và Google Fonts
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data: *.googletagmanager.com *.google-analytics.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com va.vercel-scripts.com;",
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
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
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
