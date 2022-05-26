const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, "..", dir);
// }
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // vue 3.0
  // chainWebpack: (config) => {
  //   config.resolve.alias.set("@", resolve("src"));
  // },
  // vue 2.0
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": resolve("src"),
  //     },
  //   },
  // },
});
