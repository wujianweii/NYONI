const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, "..", dir);
// }
module.exports = defineConfig({
  publicPath: "./",
  // publicPath:
  //   process.env.VUE_APP_CURRENTMODE === "stage" ? "http://nyoni.top/" : "./",
  outputDir: "dist/nyoni",
  assetsDir: "static",
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
  chainWebpack: (config) => {
    config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           rootValue: 14,
  //           selectorBlackList: ["el"], // 忽略转换正则匹配项
  //           propList: ["*"],
  //         }),
  //       ],
  //     },
  //   },
  // },
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
