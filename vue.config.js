const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://api.modash.io/v1/youtube/search',
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       ws: true,
  //       changeOrigin: true,
  //       target: "https://reqres.in/"
  //     }
  //   }
  // }
})
