<template>
  <div class="container">
    <ProductItem
      v-for="product in products"
      :key="product.model"
      :model="product.model"
      :name="product.enname"
    />
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
