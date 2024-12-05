const path = require('path');

module.exports = {
  // Set the mode to development to optimize for debugging
  mode: 'development',

  // Entry point for your app
  entry: './src/main.js',
  
  // Output configuration
  output: {
    filename: 'packed.js',
    path: path.resolve(__dirname, 'docs'),
  },

  // Disable minification in development mode
  optimization: {
    minimize: false
  },

  // Development server configuration
  devServer: {
    // Serve static files from the 'docs' directory
    static: {
      directory: path.join(__dirname, 'docs'),
    },

    // Disable overlay showing errors in the browser
    client: {
      overlay: false
    },

    // Enable gzip compression for better performance
    compress: true,

    // Port for the development server (change if 9000 is occupied)
    port: 9001,  // Change this to a different port if 9000 is in use
  },
};
