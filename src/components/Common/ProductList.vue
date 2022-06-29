<template>
  <div ref="productContainer">
    <div
      v-if="isEnOrZh === 'zh'"
      class="row"
      :style="{ flexWrap: wrap ? 'wrap' : 'nowrap' }"
    >
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :model="product.model"
        :name="product.zh_name"
        :img="product.img"
        :lazy="lazy"
      />
    </div>
    <div
      v-if="isEnOrZh === 'en'"
      class="row"
      :style="{ flexWrap: wrap ? 'wrap' : 'nowrap' }"
    >
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :model="product.model"
        :name="product.en_name"
        :img="product.img"
        :lazy="lazy"
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
    // 是否可转行
    wrap: {
      type: Boolean,
      default: true,
    },
    // 是否监听产品列表高度
    listenHeight: {
      type: Boolean,
      default: false,
    },
    lazy: {
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
    if (this.listenHeight) {
      setTimeout(() => {
        this.emitHeight();
        window.addEventListener(
          "resize",
          () => {
            // this.$emit("productItemHeight", this.$refs.productItem.offsetHeight)
            // this.productItemHeight = this.$refs.productItem.offsetHeight;
            this.emitHeight();
          },
          false
        );
      }, 200);
    }

    // setTimeout(this.imgLoad(), 5000);
    // setTimeout() => {

    // }
    // setTimeout("alert('sb')", 5000);
    // this.imgLoad();
  },
  methods: {
    emitHeight() {
      this.$nextTick(() => {
        if (this.$refs.productContainer) {
          this.$emit(
            "productItemHeight",
            this.$refs.productContainer.offsetHeight
          );
        }

        // this.productsRecommendHeight = this.$refs.productContainer.offsetHeight;
        // console.log(this.$refs.productContainer);
        // console.log(this.$refs.productContainer.offsetHeight);
        // console.log("----");
        // this.productsRecommendwidth = document.body.clientWidth / 3;
      });
    },
  },
  beforeRouteLeave() {
    window.removeEventListener("resize");
  },
};
</script>
<style>
/* .container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
} */
</style>
