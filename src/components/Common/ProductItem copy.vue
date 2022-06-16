<template>
  <div class="product-box">
    <el-image
      class="product-img"
      :src="!!model ? require('@/assets/products/' + model + '/1.jpg') : img"
      fit="cover"
    />
    <!-- <el-image
      class="product-img"
      :src="require('@/assets/products/N2806.jpg')"
      fit="cover"
    /> -->
    <TwoLinesText :name="name" />
    <p class="more" v-if="!model">More >></p>
  </div>
</template>

<script>
import TwoLinesText from "./TwoLinesText.vue";
export default {
  props: {
    model: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    // more: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  components: {
    TwoLinesText,
  },
};
</script>

<style lang="less">
.product-box {
  padding: 12px;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
@media (min-width: 1200px) {
  .product-box {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
// @media (min-width: 820px) {
//   .product-box {
//     flex: 0 0 33.33333%;
//     max-width: 33.33333%;
//   }
// }
// @media (min-width: 375px) {
//   .product-box {
//     flex: 0 0 50%;
//     max-width: 50%;
//   }
// }
// @media (min-width: 768px) {
//   .product-box {
//   }
// }
.product-item {
  width: 243px;
  height: 285px;
  padding: 12px;
  font-size: 16px;
}

.product-img {
  width: 100%;
  height: auto;
  margin-bottom: 12px;
}
.product-img img {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform, filter;
}
.product-img img:hover {
  transform: scale(1.1);
}
.more {
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
}
</style>
