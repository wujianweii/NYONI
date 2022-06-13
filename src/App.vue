<template>
  <div>
    <Menu />
    <Breadcrumb />
    <router-view />
    <Footer />
  </div>
</template>
<script>
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
};
</script>
<style lang="less"></style>
