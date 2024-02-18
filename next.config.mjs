/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/:posts*",
        destination: "https://blog.xrzyun.eu.org/posts/:posts*",
        permanent: false,
      },
      {
        source: "/posts/:posts*",
        destination: "https://blog.xrzyun.eu.org/posts/:posts*",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
