<template>
  <div ref="productContainer">
    <div
      v-if="isEnOrZh === 'zh'"
      class="container"
      :style="{ flexWrap: wrap ? 'wrap' : 'nowrap' }"
    >
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :model="product.model"
        :name="product.zh_name"
        :img="product.img"
      />
    </div>
    <div
      v-if="isEnOrZh === 'en'"
      class="container"
      :style="{ flexWrap: wrap ? 'wrap' : 'nowrap' }"
    >
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
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      productName: "",
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
  mounted() {
    // this.imgLoad();
    setTimeout(() => {
      this.imgLoad();
    }, 100);
    // setTimeout(this.imgLoad(), 5000);
    // setTimeout() => {

    // }
    // setTimeout("alert('sb')", 5000);
    // this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        // this.$emit("productItemHeight", this.$refs.productItem.offsetHeight)
        // this.productItemHeight = this.$refs.productItem.offsetHeight;
        this.imgLoad();
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.$emit(
          "productItemHeight",
          this.$refs.productContainer.offsetHeight
        );
        // this.productsRecommendHeight = this.$refs.productContainer.offsetHeight;
        // console.log(this.$refs.productContainer);
        // console.log(this.$refs.productContainer.offsetHeight);
        // console.log("----");
        // this.productsRecommendwidth = document.body.clientWidth / 3;
      });
    },
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
