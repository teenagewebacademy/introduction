// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = 'https://teenagewebacademy.github.io/introduction'

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

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


module.exports = {
  assetPrefix: '/introduction',  
  basePath: '/introduction',
  images: {
    loader: 'akamai',  
    path: '',
  },
}





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// }
 
// module.exports = nextConfig