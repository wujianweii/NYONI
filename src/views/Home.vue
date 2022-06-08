<template>
  <div class="home">
    <!-- 轮播图 -->
    <Banner />
    <!-- 销售产品分类 -->
    <Title
      title="SELLING PRODUCTS"
      title-text="To provide customers with cost-effective products"
    />
    <ProductList :products="productsCatalog" />
    <!-- 热卖产品 -->
    <Title
      title="HOT PRODUCTS"
      title-text="To provide customers with cost-effective products"
    />
    <!-- <HotProduct /> -->
    <!-- 公司视频 -->
    <Title
      title="COMPANY VIDEO"
      title-text="To provide customers with cost-effective products"
    />
    <!-- 证书展示 -->
    <Title
      title="CERTIFICATE SHOWING"
      title-text="To provide customers with cost-effective products"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Home/Banner.vue";
import Title from "@/components/Home/TitleComponents.vue";
import ProductList from "@/components/Common/ProductList.vue";
import productsCatalog from "@/modules/productsCatalog";
// import HotProduct from "@/components/Home/HotProduct.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Title,
    ProductList,
    // HotProduct,
  },
  data() {
    return {
      productsCatalog: productsCatalog,
    };
  },
};
</script>
