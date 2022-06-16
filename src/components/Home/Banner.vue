<template>
  <el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
    <!-- item 从 1 开始计数 -->
    <el-carousel-item
      v-for="item in 5"
      :key="item"
      height="auto"
      :interval="5000"
    >
      <!-- 动态背景 -->
      <!-- <div
        class="bannerbg"
        :class="{
          bannerbg1: item == 1,
          bannerbg2: item == 2,
          bannerbg3: item == 3,
          bannerbg4: item == 4,
          bannerbg5: item == 5,
        }"
      ></div> -->

      <!-- :style="{
          backgroundImage: require(url(`../../assets/banner/${item}.jpg`)),
        }" -->
      <!-- <div
        class="bannerbg"
        :style="{
          backgroundImage: (url('../../assets/banner/' + item + '.jpg')),
        }"
      ></div> -->

      <img
        ref="bannerHeight"
        :src="require(`@/assets/banner/${size}/${item}.jpg`)"
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
      bannerHeight: "",
      size: "",
      // bannerwidth: "",
    };
  },
  created() {
    this.changeImageSize();
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.changeImageSize();
        this.imgLoad();
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        // this.bannerwidth = document.body.clientWidth;
      });
    },
    changeImageSize() {
      let width = document.body.offsetWidth;
      if (width > 576) {
        this.size = "large";
      } else {
        this.size = "small";
      }
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
/* .bannerbg {
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 500px;
}
.bannerbg1 {
  background-image: url(../../assets/banner/1.jpg);
}
.bannerbg2 {
  background-image: url(../../assets/banner/2.jpg);
}
.bannerbg3 {
  background-image: url(../../assets/banner/3.jpg);
}
.bannerbg4 {
  background-image: url(../../assets/banner/4.jpg);
}
.bannerbg5 {
  background-image: url(../../assets/banner/5.jpg);
} */
</style>
