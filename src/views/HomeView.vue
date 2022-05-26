<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/HomeView/BannerComponent.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
  },
};
</script>
