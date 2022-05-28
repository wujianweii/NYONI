<template>
  <div>
    <HotSaleItem
      v-for="product in products"
      :key="product.model"
      :model="product.model"
      :name="product.enname"
    />
  </div>
</template>

<script>
import HotSaleItem from "./HotSaleItem.vue";
export default {
  components: {
    HotSaleItem,
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
