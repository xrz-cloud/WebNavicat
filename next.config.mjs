import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./src'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cfcdn.coding.xrzyun.top',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [{ source: '/blog/:posts*', destination: '/posts/:posts*', permanent: true }]
  },
  async headers() {
    return [
      {
        source: '/toolbox/LocalPlayer',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['fetch-site-metadata'],
    mdxRs: true,
  },
}

export default withPlaiceholder(config)
