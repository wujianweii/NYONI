<template>
  <el-row :gutter="10">
    <ProductItem
      v-for="product in products"
      :key="product.model"
      :model="product.model"
      :name="product.enname"
    />
  </el-row>
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
