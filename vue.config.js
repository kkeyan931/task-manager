module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5008",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
