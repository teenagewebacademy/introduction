// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = 'https://teenagewebacademy.github.io/introduction'

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }


module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // images: {
  //   loader: 'akamai',
  //   path: 'https://teenagewebacademy.github.io/introduction/public',
  // },
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
