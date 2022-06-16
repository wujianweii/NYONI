<template>
  <el-carousel
    :height="bannerHeight + 'px'"
    indicator-position="outside"
    arrow="always"
    :interval="5000"
    class="carousel"
  >
    <!-- item 从 1 开始计数 -->
    <el-carousel-item v-for="item in length" :key="item">
      <img
        ref="bannerHeight"
        :src="require(`@/assets/${theCategory}/${item}.jpg`)"
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
  props: {
    category: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    length: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      bannerHeight: "",
      size: "",
      autoplay: false,
      // indicatorPosition: "",
    };
  },
  computed: {
    theCategory() {
      if (this.category == "banner") {
        return `banner/${this.size}`;
      }
      return `products/${this.model}`;
    },
  },
  created() {
    if (this.category == "banner") {
      this.autoplay = true;
      this.changeImageSize();
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.imgLoad();
        if (this.category == "banner") {
          this.changeImageSize();
        }
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        // this.bannerHeight = this.$refs.bannerHeight[0].height;
        if (this.$refs.bannerHeight[0]) {
          this.bannerHeight = this.$refs.bannerHeight[0].height;
          // this.imgLoad();
        }
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
<style lang="less">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel {
  // .el-icon svg {
  //   width: 1.5em;
  //   height: 1.5em;
  // }
  .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
