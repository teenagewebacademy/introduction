// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

module.exports = {
  assetPrefix: process.env.NEXT_GITHUB_REP,
  basePath: process.env.NEXT_GITHUB_REP,
  images: {
    loader: 'akamai',
    path: process.env.NEXT_GITHUB_REP,
  },
}




// /**   @type {import('next').NextConfig}*/
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     loader: 'akamai',
//     path: 'https://teenagewebacademy.github.io/introduction/',
//   },
//   basePath: '/introduction',
//   assetPrefix: '/introduction',
// };
// module.exports = nextConfig




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
