<template>
  <div class="detail-box">
    <!-- 产品详情 -->
    <Carousel model="N2806" v-if="isMobile" />
    <div class="detail-container">
      <!-- background: 'url(' + require('../../assets/products/N2806/1.jpg') + ')'; -->

      <!-- <img src="../../assets/products/N2806/1.jpg" alt="" /> -->
      <!-- <div class="bg"></div> -->
      <ImgShow model="N2806" v-if="!isMobile" />
      <ProductContent :product="product" :language="isEnOrZh" />
    </div>
    <!-- 你可能喜欢 -->
    <h1 class="plr-details">{{ $t("details.recommendText") }}</h1>
    <ProductsRecommend />
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
  padding: 0 56px;
}
.detail-container {
  display: flex;
  padding: 60px 56px;
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
    padding: 0 20px;
  }
}

// .bg {
//   width: 100px;
//   height: 100px;
//   // background-image: url("../../assets/products/N2806/1.jpg");
//   // background-image: "url(' + require('@/assets/products/N2806/1.jpg') + ')";
// }
</style>
