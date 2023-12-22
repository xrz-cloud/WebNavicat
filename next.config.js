/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: "/toolbox/LocalPlayer",
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

module.exports = nextConfig;
