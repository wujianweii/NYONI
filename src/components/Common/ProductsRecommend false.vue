<template>
  <div class="products-recommend">
    <img
      class="flex-100"
      @click="prev"
      src="../../assets/icon/arrow-left.svg"
      width="30px"
    />
    <div class="products-show">
      <ProductList :products="productsRecommend" :wrap="false" />
    </div>
    <img
      class="flex-100"
      src="../../assets/icon/arrow-right.svg"
      width="30px"
      @click="next"
    />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import productsRecommend from "@/modules/productsRecommend";
export default {
  components: {
    ProductList,
  },
  data() {
    return {
      productsRecommend: productsRecommend,
    };
  },
};
</script>

<style>
/* .products-recommend {
  display: flex;
  justify-content: center;
  height: 350px;
  overflow: hidden;
}
.products-show {
  flex: 0 0 80%;
  overflow: scroll;
  height: 350.33px;
  transition: all 0.3s ease-out 0.1s;
} */
</style>
