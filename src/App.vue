<template>
  <div class="relative">
    <Menu :isDarkColor="!isHome" />
    <div v-if="!isHome" class="header-fill"></div>
    <Breadcrumb v-if="false" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// import { useRouter } from "vue-router";
import Menu from "@/components/Home/Menu.vue";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
import Footer from "@/components/Common/Footer.vue";
export default {
  name: "app",
  components: {
    Menu,
    Breadcrumb,
    Footer,
  },
  data() {
    return {
      // isHome: false,
    };
  },
  computed: {
    isHome() {
      // let router = useRouter();
      // setTimeout(() => {
      // console.log(router.currentRoute.value.name == "home");
      // console.log(this.$route.name);
      return this.$route.name == "home";
      // }, 10);
    },
  },
  // mounted() {

  // },
};
</script>
<style lang="less">
.header-fill {
  height: 144px;
  width: 100%;
}
@media screen and (max-width: 576px) {
  .header-fill {
    height: 80px;
    width: 100%;
  }
}
</style>
