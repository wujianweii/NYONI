<template>
  <div>
    <Menu />
    <Breadcrumb />
    <router-view />
  </div>
</template>
<script>
import Menu from "@/components/Home/Menu.vue";
import Breadcrumb from "@/components/Common/Breadcrumb.vue";
export default {
  name: "app",
  components: {
    Menu,
    Breadcrumb,
  },
};
</script>
<style lang="less"></style>
