<template>
  <div class="mix-image-swiper">
    <el-carousel
      :interval="5000"
      arrow="always"
      :height="imageSwiperHeight + 'px'"
    >
      <el-carousel-item
        height="auto"
        v-for="(arr, index) in swiperNum"
        :key="index"
      >
        <!-- <span>{{ arr }}</span> -->
        <div class="flex" ref="imageSwiperRef">
          <img
            class="imageSwiper"
            :style="[
              { 'max-width': 100 / ImageNum + '%' },
              { 'flex-basis': 100 / ImageNum + '%' },
            ]"
            v-for="num in ImageNum"
            :key="num"
            :src="
              require('@/assets/' +
                file +
                ((arr - 1) * ImageNum + num) +
                '.jpg')
            "
          />
        </div>
      </el-carousel-item>

      <!-- <el-carousel-item height="auto">1 </el-carousel-item>
      <el-carousel-item height="auto"> 2</el-carousel-item>
      <el-carousel-item height="auto"> 3</el-carousel-item> -->
    </el-carousel>
  </div>
</template>
<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
export default {
  components: {
    ElCarousel,
    ElCarouselItem,
  },
  props: {
    swiperNum: {
      type: Number,
      default: 3,
    },
    ImageNum: {
      type: Number,
      default: 4,
    },
    file: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      imageSwiperHeight: "224",
      // Array: [],
      // productsRecommendwidth: "",
    };
  },
  // created() {
  //   const Length = this.swiperNum * this.ImageNum;
  //   let Array = [];
  //   for (let i = 1; i < Length + 1; i++) {
  //     Array.push(i);
  //   }
  //   console.log(Array);
  //   let Arrayy = [];
  //   for (let i = 0; i < Length; i = i + this.ImageNum) {
  //     Arrayy.push(Array.slice(i, i + this.ImageNum));
  //   }
  //   console.log(Arrayy);
  //   this.Array = Arrayy;
  // },
  mounted() {
    setTimeout(() => {
      this.imgLoad();
    }, 200);
    window.addEventListener(
      "resize",
      () => {
        this.imgLoad();
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.imageSwiperHeight = this.$refs.imageSwiperRef[0].offsetHeight;
        // console.log(this.$refs.imageSwiperRef[0]);
        // console.log(this.$refs.imageSwiperRef[0].clientHeight);
        // console.log(this.$refs.imageSwiperRef[0].offsetHeight);
        // this.productsRecommendwidth = document.body.clientWidth / 3;
      });
    },
  },
};
</script>
<style lang="less">
.mix-image-swiper {
  background: #fff;
  .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .product-box {
    flex: 25%;
    max-width: 25%;
  }
  .el-carousel__container {
    height: auto;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #fff;
  }
}
.imageSwiper {
  padding-right: 12px;
  flex-grow: 0;
  flex-shrink: 0;
}
</style>
