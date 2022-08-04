<template>
  <div class="products-recommend" ref="productsRecommendList">
    <el-carousel
      :interval="5000"
      arrow="always"
      :height="productsRecommendHeight + 'px'"
    >
      <el-carousel-item height="auto">
        <ProductList
          :products="productsRecommend.slice(0, 4)"
          :wrap="false"
          :listenHeight="true"
          @productItemHeight="getProductItemHeight"
          :lazy="false"
        />
      </el-carousel-item>
      <el-carousel-item height="auto">
        <ProductList
          :products="productsRecommend.slice(4, 8)"
          :wrap="false"
          :lazy="false"
        />
      </el-carousel-item>
      <el-carousel-item height="auto">
        <ProductList
          :products="productsRecommend.slice(8, 12)"
          :wrap="false"
          :lazy="false"
        />
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
      // console.log("111", this.productsRecommendHeight);
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
<style lang="less">
.products-recommend {
  background: #fff;
  padding: 20px 0px 60px;
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
@media screen and (max-width: 576px) {
  .products-recommend {
    padding: 20px 8px 60px;
  }
}
</style>
