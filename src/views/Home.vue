<template>
  <div class="home">
    <Menu />
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/HomeView/Menu.vue";
import Banner from "@/components/HomeView/Banner.vue";

export default {
  name: "HomeView",
  components: {
    Menu,
    Banner,
  },
};
</script>
