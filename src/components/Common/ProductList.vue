<template>
  <div>
    <div v-if="isEnOrZh === 'zh'" class="container">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :model="product.model"
        :name="product.zh_name"
        :img="product.img"
      />
    </div>
    <div v-if="isEnOrZh === 'en'" class="container">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :model="product.model"
        :name="product.en_name"
        :img="product.img"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      productName: "",
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
