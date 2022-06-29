<template>
  <div>
    <!-- 头部 -->
    <Header />
    <el-backtop :right="56" :bottom="56" style="color: #000" />
    <!-- 公司介绍 -->
    <div class="company-introduction">
      <h2>{{ $t("home.companyIntroduction.title") }}</h2>
      <p>
        {{ $t("home.companyIntroduction.content") }}
      </p>
      <button @click="toRouter('nyoni')">{{ $t("home.button.about") }}</button>
    </div>
    <!-- 轮播 -->
    <Carousel category="banner" />
    <!-- 产品 -->
    <ProductsList class="container pt-80" />
    <div class="text-center pb-80">
      <button @click="toRouter('products')">
        {{ $t("home.button.product") }}
      </button>
    </div>
    <!-- 客户 -->
    <div class="enterprise-spirit relative">
      <!-- <img src="../assets/common/background.jpg" alt="" /> -->
      <div class="bg"></div>
      <div class="enterprise-spirit-text">
        <h2>{{ $t("home.enterpriseSpirit.title1") }}</h2>
        <h3>{{ $t("home.enterpriseSpirit.title2") }}</h3>
        <p>
          {{ $t("home.enterpriseSpirit.content") }}
        </p>
        <button class="button-white" @click="toRouter('contact')">
          {{ $t("home.button.contact") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import Carousel from "@/components/Common/Carousel.vue";
// import Banner from "@/components/Home/Banner.vue";
import ProductsList from "@/components/Home/ProductsList.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Header,
    ProductsList,
  },
  methods: {
    toRouter(data) {
      if (data == "products") {
        this.$router.push({
          name: "products",
          params: {
            brand: "nyoni",
          },
        });
      } else {
        this.$router.push({
          name: data,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.company-introduction {
  padding: 80px 50px;
  max-width: 920px;
  margin: 0 auto;
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 28px;
  }
}
.bg {
  // filter: grayscale(100%);
  // opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.enterprise-spirit {
  height: 700px;
  background: url("../assets/common/background.jpg") no-repeat scroll center;
}
.enterprise-spirit-text {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  max-width: 700px;
  width: 700px;
  h2 {
    font-size: 50px;
    font-weight: 800;
    color: #fff;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    padding: 30px 0;
    color: #fff;
  }
}
@media screen and (max-width: 992px) {
  .enterprise-spirit-text {
    width: 90%;
    h2 {
      font-size: 34px;
      font-weight: 800;
    }
    h3 {
      font-size: 18px;
      font-weight: 500;
      padding: 18px 0;
    }
  }
}
</style>
