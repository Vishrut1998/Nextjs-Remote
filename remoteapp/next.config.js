const NextFederationPlugin = require('@module-federation/nextjs-mf');


module.exports = {
  // output:{
  //   publicPath: '/remote'
  // },
  // exposePages:{
  //   './pages/about/index.tsx' : '/about'
  // },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './App': './pages/index.tsx',
        },
        shared: {
          // whatever else
        },
      }),
    );

    return config;
  },
};




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
