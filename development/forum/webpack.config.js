//To run webpack script that bundles javascript, type "npm run dev" in cmd
//The code in this section comes from SaaS Pegasus: https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/integrating-javascript-pipeline/

const path = require('path');

module.exports = {
  entry: './physics_forum/front_end/app.js',
  output: {
    filename: 'react-script.js',
    path: path.resolve(__dirname, './physics_forum/static/base/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
    ]
  }
};

