import { createApp } from "vue";

import App from "./App.vue";
import "./styles/main.less";
import "./util/rem";

import i18n from "./language";
import router from "./router";
import store from "./store";
import base from "./util/base";
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$base = base;
app.use(i18n);
app.mount("#app");
