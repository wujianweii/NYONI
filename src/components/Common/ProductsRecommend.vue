<template>
  <div class="products-recommend" ref="productsRecommendList">
    <el-carousel
      :interval="1000000"
      arrow="always"
      :height="productsRecommendHeight + 'px'"
    >
      <el-carousel-item height="auto">
        <ProductList
          :products="productsRecommend.slice(0, 3)"
          :wrap="false"
          @productItemHeight="getProductItemHeight"
        />
      </el-carousel-item>
      <el-carousel-item height="auto">
        <ProductList :products="productsRecommend.slice(3, 6)" :wrap="false" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
import ProductList from "./ProductList.vue";
import productsRecommend from "@/modules/productsRecommend";
export default {
  components: {
    ElCarousel,
    ElCarouselItem,
    ProductList,
    // ElImage,
  },
  data() {
    return {
      productsRecommend: productsRecommend,
      productsRecommendHeight: "",
      // productsRecommendwidth: "",
    };
  },
  // mounted() {
  //   this.imgLoad();
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       this.productsRecommendHeight =
  //         this.$refs.productsRecommendList.clientHeight;
  //       this.imgLoad();
  //     },
  //     false
  //   );
  // },
  methods: {
    getProductItemHeight(data) {
      this.productsRecommendHeight = data;
      console.log("111", this.productsRecommendHeight);
    },
    // imgLoad() {
    //   this.$nextTick(() => {
    //     this.productsRecommendHeight =
    //       this.$refs.productsRecommendList.clientHeight;
    //     console.log(this.$refs.productsRecommendList);
    //     // this.productsRecommendwidth = document.body.clientWidth / 3;
    //   });
    // },
  },
};
</script>
<style scoped>
.products-recommend .el-carousel__container {
  height: auto;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
} */
</style>
