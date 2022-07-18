import { createI18n } from "vue-i18n";

import zh from "./zh";
import en from "./en";

//根据浏览器语言切换语言
function navigatorLanguage() {
  let navigatorLanguage = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase();
  console.log(navigatorLanguage);
  if (navigatorLanguage == "zh-cn") {
    window.localStorage.setItem("language", "zh");
  } else {
    window.localStorage.setItem("language", "en");
  }
}
if (!window.localStorage.getItem("language")) {
  navigatorLanguage();
}
const default_lang = window.localStorage.getItem("language") || "en";

const i18n = createI18n({
  locale: default_lang,
  fallbackLocale: "en", //没有英文的时候默认中文语言
  silentFallbackWarn: true, //抑制警告
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    zh,
    en,
  },
});

export default i18n; //对外暴露 i18n, 在 main.js 中挂载
