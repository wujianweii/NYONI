<template>
  <div class="detail-box">
    <!-- 产品详情 -->
    <Carousel
      v-if="isMobile"
      :model="model"
      :length="product.length ? product.length : 5"
    />
    <div class="detail-container">
      <!-- background: 'url(' + require('../../assets/products/N2806/1.jpg') + ')'; -->

      <!-- <img src="../../assets/products/N2806/1.jpg" alt="" /> -->
      <!-- <div class="bg"></div> -->
      <ImgShow
        v-if="!isMobile"
        :model="model"
        :length="product.length ? product.length : 5"
      />
      <ProductContent :product="product" :language="isEnOrZh" />
    </div>
    <!-- 你可能喜欢 -->
    <div class="container recommend-container">
      <h1 class="plr-details">{{ $t("details.recommendText") }}</h1>
      <ProductsRecommend />
    </div>
  </div>
</template>

<script>
import ImgShow from "@/components/ProductsDetail/ImgShow.vue";
import Carousel from "@/components/Common/Carousel.vue";
import ProductsRecommend from "@/components/Common/ProductsRecommend.vue";
import ProductContent from "./productContent.vue";
import productsList from "@/modules/productsList";
export default {
  components: {
    ImgShow,
    Carousel,
    ProductContent,
    ProductsRecommend,
  },
  data() {
    return {
      isMobile: false,
      model: "",
      product: {},
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
  created() {
    this.model = this.$route.params.model;
    this.product = productsList[this.model];
    console.log(this.product);
    // if (this.isEnOrZh == "en") {
    //   this.product = productsList[this.model]["en"];
    // }
    // if (this.isEnOrZh == "en") {
    //   this.product = productsList[this.model]["en"];
    // }

    console.log(this.model);
    if (document.body.offsetWidth <= 576) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    window.addEventListener(
      "resize",
      () => {
        if (document.body.offsetWidth <= 576) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      false
    );
  },
};
</script>

<style lang="less">
.price {
  font-weight: 700;
  font-size: 18px;
  margin-top: 12px;
}
.icon-ul {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 12px;
}
.icon-li {
  flex: 0 0 40px;
  height: 40px;
}
.plr-details {
  font-size: 24px;
}
.detail-container {
  display: flex;
  padding: 60px 56px;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  clear: both;
}
.detail-text-container {
  padding: 0 20px;
}

@media screen and (max-width: 576px) {
  .detail-container {
    flex-wrap: wrap;
    padding: 0;
  }
  .detail-text-container {
    flex: 0 0 100%;
  }
  .detail-text-container {
    padding: 20px;
  }
  .plr-details {
    margin-top: 20px;
    padding: 0 20px;
    font-size: 16px;
  }
}
@media screen and (min-width: 1400px) {
  .detail-container {
    box-sizing: content-box;
    max-width: 1200px;
  }
}
@media screen and (max-width: 768px) {
  .recommend-container {
    padding: 0;
  }
}
// .bg {
//   width: 100px;
//   height: 100px;
//   // background-image: url("../../assets/products/N2806/1.jpg");
//   // background-image: "url(' + require('@/assets/products/N2806/1.jpg') + ')";
// }
</style>
