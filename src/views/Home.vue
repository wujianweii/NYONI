<template>
  <div class="home">
    <Banner />
    <Title
      title="COMPANY VIDEO"
      title-text="To provide customers with cost-effective products"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Home/Banner.vue";
import Title from "@/components/Home/TitleComponents.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Title,
  },
};
</script>
