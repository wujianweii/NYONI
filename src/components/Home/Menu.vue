<template>
  <div>
    <div
      class="header-bar"
      :class="{ dark_color: isDarkColor, hideBar: hideMenus }"
    >
      <!-- logo -->
      <a href="/"
        ><img
          src="@/assets/common/nyoni_white.png"
          alt="logo"
          class="logo"
          v-if="!isDarkColor" /><img
          v-else
          src="@/assets/common/nyoni_black.png"
          alt="logo"
          class="logo"
      /></a>
      <!-- 文字列表 -->
      <ul class="header-bar-list">
        <!-- 首页 -->
        <li>
          <a href="/">{{ $t("common.header.home") }}</a>
        </li>
        <!-- 产品 -->
        <li
          class="relative hasSubMenu"
          :class="{ active: showProducts == true }"
          @click="showProduct()"
          @mouseenter="showProduct(true)"
          @mouseleave="showProduct(false)"
        >
          <a href="javaScript:void(0)"
            >{{ $t("common.header.products.products") }}
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-white.svg"
              alt=""
              v-if="!isDarkColor"
            />
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-black.svg"
              alt=""
              v-else
            />
          </a>
          <ul class="subMenu" :class="{ active: showProducts == true }">
            <li>
              <a href="javaScript:void(0)" @click="toProduct('nyoni')">{{
                $t("common.header.products.nyoni")
              }}</a>
            </li>
            <li>
              <a href="javaScript:void(0)" @click="toProduct('feiyan')">{{
                $t("common.header.products.feiyan")
              }}</a>
            </li>
          </ul>
        </li>
        <!-- 联系 -->
        <li>
          <a href="/contact">{{ $t("common.header.contact") }}</a>
        </li>
        <!-- <li>
        <a href="/products">{{ $t("common.header.products") }}</a>
      </li> -->
        <!-- 关于 -->
        <!-- <li>
          <a href="/about">{{ $t("common.header.about") }}</a>
        </li> -->
        <li
          class="relative hasSubMenu"
          :class="{ active: showAbouts == true }"
          @click="showAbout()"
          @mouseenter="showAbout(true)"
          @mouseleave="showAbout(false)"
        >
          <a href="javaScript:void(0)"
            >{{ $t("common.header.about.about") }}
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-white.svg"
              alt=""
              v-if="!isDarkColor"
            />
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-black.svg"
              alt=""
              v-else
            />
          </a>
          <ul class="subMenu" :class="{ active: showAbouts == true }">
            <li @click="toAbout('nyoni')">
              <a href="javaScript:void(0)">{{
                $t("common.header.about.nyoni")
              }}</a>
            </li>
            <li @click="toAbout('jiuling')">
              <a href="javaScript:void(0)">{{
                $t("common.header.about.jiuling")
              }}</a>
            </li>
          </ul>
        </li>
        <!-- 语言 -->
        <li
          class="relative hasSubMenu"
          :class="{ active: showLanguages == true }"
          @click="showLanguage()"
          @mouseenter="showLanguage(true)"
          @mouseleave="showLanguage(false)"
        >
          <a href="javaScript:void(0)"
            >{{ $t("common.header.language.lg") }}
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-white.svg"
              alt=""
              v-if="!isDarkColor"
            />
            <img
              class="hasArraw"
              src="../../assets/icon/arrow-down-black.svg"
              alt=""
              v-else
            />
          </a>
          <ul class="subMenu" :class="{ active: showLanguages == true }">
            <li @click="changeLanguage('zh')">
              <a href="javaScript:void(0)">{{
                $t("common.header.language.zh")
              }}</a>
            </li>
            <li @click="changeLanguage('en')">
              <a href="javaScript:void(0)">{{
                $t("common.header.language.en")
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showLanguages: false,
      showProducts: false,
      showAbouts: false,
      hideMenus: false,
      // isDarkColor: true,
      isHome: false,
    };
  },
  props: {
    isDarkColor: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      productsBrand: "getProductsBrand",
    }),
  },
  mounted() {
    // let router = useRouter();
    // setTimeout(() => {
    //   this.isHome = router.currentRoute.value.name == "home";
    //   if (this.isHome) {
    //     this.isDarkColor = false;
    //   } else {
    //     this.isDarkColor = true;
    //   }
    // }, 10);
    window.addEventListener(
      "scroll",
      () => {
        this.hideMenu();
      },
      false
    );
  },
  methods: {
    ...mapActions(["changeProductsBrand", "changeCategoriesChoose"]),
    toProduct(data) {
      if (this.$route.name == "products" && this.productsBrand == data) {
        // this.showProduct(false);
        // this.showProducts = false;
        // console.log(1111);
        // this.showProduct();
        return;
      } else {
        this.changeProductsBrand(data);
        this.changeCategoriesChoose("color_pencil");
        // if () {
        this.$router.push({
          name: "products",
          params: {
            brand: data,
          },
        });
      }
    },
    toAbout(data) {
      // if () {
      this.$router.push({
        name: data,
      });
    },
    showLanguage(data) {
      if (data) {
        this.showLanguages = data;
      } else {
        this.showLanguages = !this.showLanguages;
      }
    },
    showProduct(data) {
      if (data) {
        this.showProducts = data;
      } else {
        this.showProducts = !this.showProducts;
      }
    },
    showAbout(data) {
      if (data) {
        this.showAbouts = data;
      } else {
        this.showAbouts = !this.showAbouts;
      }
    },
    changeLanguage(data) {
      let language = window.localStorage.getItem("language");
      if (language != data) {
        window.localStorage.setItem("language", data);
        // this.$router.push()
        location.reload();
      }
    },
    hideMenu() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (scrollTop != 0) {
        this.hideMenus = true;
      } else {
        this.hideMenus = false;
      }
    },
  },
};
</script>

<style lang="less">
.header-bar {
  position: fixed;
  height: 40px;
  z-index: 5;
  left: 20px;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 576px) {
  .header-bar-list {
    // opacity: 0;
    // visibility: 0;
    display: none !important;
  }
}

@media screen and (min-width: 576px) {
  .header-bar {
    left: 16px;
    right: 16px;
    top: 16px;
  }
}
@media screen and (min-width: 768px) {
  .header-bar {
    left: 56px;
    right: 56px;
    top: 52px;
  }
}
.logo {
  width: 114px;
}
.dark_color {
  .header-bar-list > li > a:after {
    background-color: #000;
  }
  .header-bar-list > li > a {
    color: #000;
  }
  .subMenu.active li a {
    color: #000;
  }
}
.header-bar-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
}
.header-bar-list > li > a:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 15px;
  right: 15px;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.4s cubic-bezier(0.75, 0, 0.2, 1);
  background-color: white;
}
.header-bar-list > li:hover > a:after {
  transform: scaleX(1);
  transform-origin: left center;
}
.header-bar-list > li > a {
  position: relative;
  z-index: 5;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  display: inline-block;
  padding: 12px 15px;
}

//
.hasArraw {
  display: inline-block;
  width: 10px;
  // background: url(../../assets/icon/arrow-down.svg) 100% 50% no-repeat;
}
.hasSubMenu.active .hasArraw {
  transform: rotate(180deg);
}

/* @media (max-width: 990px) {
  .header-bar-list > li > a {
    padding: 12px;
  }
} */
.subMenu {
  display: block;
  position: absolute;
  top: 50px;
  left: 15px;
  width: 220px;
  visibility: hidden;
  opacity: 0;
  font-weight: 400;
}
.subMenu.active {
  visibility: visible;
  opacity: 1;
}
.subMenu.active li {
  opacity: 1;
  transform: translate(0, 0);
}
.subMenu.active li:first-child {
  padding-top: 0.5rem;
}
.subMenu.active li a {
  padding: 5px 0;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
}
.subMenu li:hover {
  border: none;
  opacity: 0.7;
}
.subMenu li {
  border-bottom: none;
  transition: opacity 300ms ease;
}
.subMenu li {
  margin-bottom: 5px;
  left: 0;
  opacity: 0;
  transform: translate(40px, 0);
  transition: transform 0.35s ease, transform 0.35s ease;
}
.subMenu li:nth-child(1) {
  transition-delay: 0.1s;
}
.subMenu li:nth-child(2) {
  transition-delay: 0.2s;
}
.subMenu li:nth-child(3) {
  transition-delay: 0.3s;
}
.subMenu li:nth-child(4) {
  transition-delay: 0.4s;
}
.subMenu li:nth-child(5) {
  transition-delay: 0.5s;
}
.subMenu li:nth-child(6) {
  transition-delay: 0.6s;
}
.subMenu li:nth-child(7) {
  transition-delay: 0.7s;
}
.hideBar {
  display: none;
}
// .subMenu {
//   display: block;
//   position: absolute;
//   top: 50px;
//   left: 15px;
//   width: 220px;
//   visibility: hidden;
//   opacity: 0;
//   justify-content: flex-end;
//   &.active {
//     visibility: visible;
//     opacity: 1;
//   }
//   li {
//     margin-bottom: 5px;
//     left: 0;
//     opacity: 0;
//     transform: translate(40px, 0);
//     transition: opacity 0.35s ease, transform 0.35s ease;
//   }
//   li:nth-child(1) {
//     transition-delay: 0.1s;
//   }
// }
</style>
