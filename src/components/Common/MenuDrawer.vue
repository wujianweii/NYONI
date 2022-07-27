<template>
  <div>
    <!-- <div class="item bt-menu js-nav-main" data-menu-id="menu-main">
                    <div class="ico-menu">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                    <span class="has-tablet">MENU</span>
                </div> -->
    <div
      class="menu-drawer-switch bt-menu"
      :class="{
        'color-white': menuSwitch,
        'bt-menu-white': routeName == 'home',
        hideBar: hideMenus,
      }"
      @click="menuSwitch = true"
    >
      <!-- <img
        class="menu-colse"
        @click="menuSwitch = false"
        src="../../assets/icon/ship.svg"
        alt=""
      /> -->
      <div class="ico-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <span>{{ $t("common.header.menu") }}</span>
    </div>
    <div
      class="menu-drawer-overlay"
      :class="{ 'menu-drawer-overlay-show': menuSwitch }"
      @click="menuSwitch = false"
    ></div>
    <div class="menu-drawer">
      <div class="menu-drawer-header">
        <img
          src="@/assets/common/nyoni_black.png"
          alt="logo"
          class="menu-drawer-logo"
        />
        <img
          class="menu-colse"
          @click="menuSwitch = false"
          src="../../assets/icon/colse.svg"
          alt="关闭"
        />
      </div>
      <el-collapse v-model="activeName" accordion>
        <div class="menu-drawer-li list-bb" @click="toRouter('home')">
          {{ $t("common.header.home") }}
        </div>
        <el-collapse-item :title="menu.products[isEnOrZh]" name="products">
          <ul>
            <li class="menu-drawer-li" @click="toRouter('products', 'nyoni')">
              {{ $t("common.header.products.nyoni") }}
            </li>
            <li class="menu-drawer-li" @click="toRouter('products', 'feiyan')">
              {{ $t("common.header.products.feiyan") }}
            </li>
          </ul>
        </el-collapse-item>
        <div class="menu-drawer-li list-bb" @click="toRouter('contact')">
          {{ $t("common.header.contact") }}
        </div>
        <el-collapse-item :title="menu.about[isEnOrZh]" name="about">
          <ul>
            <li class="menu-drawer-li" @click="toRouter('nyoni')">
              {{ $t("common.header.about.nyoni") }}
            </li>
            <li class="menu-drawer-li" @click="toRouter('jiuling')">
              {{ $t("common.header.about.jiuling") }}
            </li>
            <!-- <li class="menu-drawer-li" @click="toRouter('hzmanqini')">
              {{ $t("common.header.about.hzmanqini") }}
            </li> -->
          </ul>
        </el-collapse-item>
        <div class="menu-drawer-li list-bb" @click="toRouter('buy')">
          {{ $t("common.header.buy") }}
        </div>
        <el-collapse-item :title="menu.language[isEnOrZh]" name="language">
          <ul>
            <li class="menu-drawer-li" @click="toRouter('language', 'zh')">
              {{ $t("common.header.language.zh") }}
            </li>
            <li class="menu-drawer-li" @click="toRouter('language', 'en')">
              {{ $t("common.header.language.en") }}
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
      <!-- <ul class=""> -->
      <!-- <li class="menu-drawer-li" @click="toRouter('home')">
          {{ $t("common.header.home") }}
        </li>
        <li class="menu-drawer-li" @click="toRouter('home')">
          {{ $t("common.header.home") }}
        </li> -->
      <!-- </ul> -->
    </div>
  </div>

  <!-- <el-drawer
    v-model="menuSwitch"
    :with-header="false"
    direction="ltr"
    :size="320"
  >
    <img
      src="@/assets/common/nyoni_white.png"
      alt="nyoni"
      class="menu-drawer-logo"
      v-show="menuSwitch"
    />
  </el-drawer> -->
</template>

<script>
import { mapActions } from "vuex";
// import { ArrowDown } from "@element-plus/icons-vue";
export default {
  // components: {
  //   ArrowDown,
  // },
  // props: {
  //   menuDrawerStatus: {
  //     Type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      menuSwitch: false, // 默认隐藏 0隐藏 1显示
      isEnOrZh: window.localStorage.getItem("language"),
      hideMenus: false,
      activeName: "",
      // routeName: "",
      menu: {
        products: {
          en: "Products",
          zh: "产品",
        },
        about: {
          en: "About",
          zh: "关于",
        },
        language: {
          en: "Language",
          zh: "语言",
        },
      },
    };
  },
  // created() {
  //   setTimeout(() => {
  //     this.routeName = this.$route.name;
  //   }, 10);
  // },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
  watch: {
    menuSwitch(val) {
      this.$emit("menuSwitch", val);
    },
    // menuDrawerStatus(val) {
    //   if (val) {
    //     this.menuSwitch = false;
    //   }
    // },
  },
  mounted() {
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
    toRouter(data, params) {
      this.menuSwitch = false;
      setTimeout(() => {
        if (data == "language") {
          let language = window.localStorage.getItem("language");
          if (language != params) {
            window.localStorage.setItem("language", params);
            // this.$router.push()
            location.reload();
          }
          return;
        } else if (data == "products") {
          this.changeProductsBrand(params);
          this.changeCategoriesChoose("color_pencil");
          this.$router.push({
            name: data,
            params: { brand: params },
          });
        } else {
          this.$router.push({
            name: data,
          });
        }
      }, 700);
    },
  },
};
</script>
<style lang="less">
// .example-showcase .el-dropdown-link {
//   cursor: pointer;
//   color: #252525;
//   display: flex;
//   align-items: center;
// }
.menu-drawer {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  background: #f4f7f6;
  overflow-y: auto;
  transform: translateX(-320px);
  transition: background 0.3s ease-in-out;
  .el-collapse {
    border: none;
  }
}

.el-collapse-item {
  .el-collapse-item__header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    height: 70px;
    line-height: 70px;
    font-size: 14px;
    font-weight: 500;
    color: #252525;
    cursor: pointer;
    background: #f4f7f6;
    border-bottom: 1px solid #e6eaea;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }
  .el-collapse-item__header:hover {
    background: #fff;
  }
  .el-collapse-item__content {
    padding-bottom: 0px;
  }
}
.menu-drawer-header {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;
  line-height: 70px;
  font-size: 13px;
  font-weight: normal;
  background-color: #f4f7f6;
  border-bottom: 1px solid #e6eaea;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;
}
.menu-drawer-switch {
  z-index: 10;
  position: fixed;
  top: 20px;
  right: 20px;
  height: 40px;
  line-height: 40px;
  color: #000;
  cursor: pointer;
}

.menu-drawer-li {
  margin: 0;
  position: relative;
  display: block;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  font-size: 14px;
  font-weight: 500;
  color: #252525;
  cursor: pointer;
  background: #fff;
  // text-indent: 20px;
  border-top: 1px solid #e6eaea;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out,
    color 0.3s ease-in-out;
}
.list-bb {
  border-top: none;
  background: #f4f7f6;
  border-bottom: 1px solid #e6eaea;
}
.menu-drawer-li:hover {
  background: #fff;
}

.menu-drawer-logo {
  width: 88px;
}
.color-white {
  color: #fff;
}
.menu-drawer-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}
.menu-drawer-overlay-show {
  opacity: 1;
  visibility: visible;
}
@media screen and (min-width: 768px) {
  .menu-drawer {
    display: none !important;
  }
  .menu-drawer-switch {
    display: none !important;
  }
}
.menu-colse {
  cursor: pointer;
  height: 18px;
  width: 18px;
}

.ico-menu {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 13px;
}
.ico-menu:hover .bar:after {
  left: 0;
}

.ico-menu .bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #202121;
  border-radius: 2px;
  overflow: hidden;
}

.bt-menu-white {
  .ico-menu .bar {
    background-color: #fff;
  }
  color: #fff;
}
.ico-menu .bar:nth-child(1) {
  top: 0;
}

.ico-menu .bar:nth-child(2) {
  top: 4px;
}

.ico-menu .bar:nth-child(3) {
  top: 8px;
}

.ico-menu .bar:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #a6abab;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  transition: 0.3s;
}

.ico-menu .bar:nth-child(1):after {
  transition-delay: 0.1s;
}

.ico-menu .bar:nth-child(2):after {
  transition-delay: 0.2s;
}

.ico-menu .bar:nth-child(3):after {
  transition-delay: 0.3s;
}

.bt-menu {
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
}

.bt-menu .ico-menu {
  top: -1px;
  margin-right: 10px;
  vertical-align: middle;
}

.bt-menu span {
  transition: all 0.2s ease-in-out;
}

.bt-menu:hover {
  color: #64686a;
}

.bt-menu:hover .ico-menu .bar:after {
  left: 0;
}
.hideBar {
  display: none;
}
</style>
