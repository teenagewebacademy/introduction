
/**   @type {import('next').NextConfig}*/

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/public',
  },
  basePath: '/introduction',
  assetPrefix: '/introduction',
};

module.exports = nextConfig




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig