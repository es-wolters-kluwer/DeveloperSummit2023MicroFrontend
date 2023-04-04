import { container } from 'webpack';
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:4000/',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        mf_products: 'mf_products@http://localhost:4001/remoteEntry.js',
        mf_oauth: 'mf_oauth@http://localhost:4002/remoteEntry.js',
        mf_wishlist: 'mf_wishlist@http://localhost:4004/remoteEntry.js',
      },
      shared: {
        react: {
          eager: true,
        },
        'react-dom/client': {
          eager: true,
        },
      },
    }),
  ],
};
