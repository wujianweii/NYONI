<template>
  <div class="wrapper" :class="{ 'menu-drawer-open': menuDrawerOpen }">
    <Menu :isDarkColor="!isHome" />
    <MenuDrawer @menuSwitch="changeMenuSwitch" />
    <div v-if="!isHome" class="header-fill"></div>
    <router-view :key="key" />
    <Footer />
    <el-backtop :right="56" :bottom="56" style="color: #000" />
  </div>
</template>
<script>
// import { useRouter } from "vue-router";
import Menu from "@/components/Common/Menu.vue";
import Footer from "@/components/Common/Footer.vue";
import MenuDrawer from "./components/Common/MenuDrawer.vue";
export default {
  name: "app",
  components: {
    Menu,
    Footer,
    MenuDrawer,
  },
  data() {
    return {
      // isHome: false,
      menuDrawerOpen: false,
    };
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    },
    isHome() {
      // let router = useRouter();
      // setTimeout(() => {
      // console.log(router.currentRoute.value.name == "home");
      // console.log(this.$route.name);
      return this.$route.name == "home";
      // }, 10);
    },
  },
  methods: {
    changeMenuSwitch(data) {
      this.menuDrawerOpen = data;
    },
  },
  // mounted() {

  // },
};
</script>
<style lang="less">
.wrapper {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: #fff;
  z-index: 1;
  transition: transform 0.5s ease-in-out;
}
.menu-drawer-open {
  position: fixed;
  transform: translateX(320px);
}
// .wrapper:before {
//   content: "";
//   display: block;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.75);
//   z-index: 10;
//   opacity: 0;
//   visibility: hidden;
//   transition: all 0.5s ease-in-out;
// }
// .menu-drawer-open:before {
//   opacity: 1;
//   visibility: visible;
// }

.header-fill {
  height: 184px;
  width: 100%;
}
@media screen and (max-width: 576px) {
  .header-fill {
    height: 100px;
    width: 100%;
  }
}
</style>
