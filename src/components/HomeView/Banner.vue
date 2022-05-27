<template>
  <el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
    <!-- item 从 1 开始计数 -->
    <el-carousel-item
      v-for="item in 5"
      :key="item"
      height="auto"
      interval="5000"
    >
      <!-- <el-image
        class="banner"
        :src="require('../../assets/banner/' + imageUrl[item - 1])"
      /> -->
      <img
        ref="bannerHeight"
        :src="require('../../assets/banner/' + imageUrl[item - 1])"
        alt=""
        @load="imgLoad"
        style="width: 100%"
      />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { ElCarousel, ElCarouselItem } from "element-plus";

export default {
  components: {
    ElCarousel,
    ElCarouselItem,
    // ElImage,
  },
  data() {
    return {
      imageUrl: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      bannerHeight: "",
      bannerwidth: "",
    };
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.imgLoad();
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.bannerwidth = document.body.clientWidth;
      });
    },
  },
};
</script>
<style scoped>
.banner {
  width: 100%;
  height: auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
