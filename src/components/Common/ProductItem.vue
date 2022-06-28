<template>
  <div class="product-box" @click="toProductDetail">
    <el-image
      class="product-img"
      :src="!!model ? require('@/assets/products/' + model + '/1.jpg') : img"
      fit="cover"
      :lazy="lazy"
    />
    <!-- <el-image
      class="product-img"
      :src="require('@/assets/products/N2806/1.jpg')"
      fit="cover"
      :lazy="lazy"
    /> -->
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
import { mapGetters } from "vuex";
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
    lazy: {
      type: Boolean,
      default: true,
    },
    // more: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  computed: {
    ...mapGetters({
      productsBrand: "getProductsBrand",
    }),
  },
  components: {
    TwoLinesText,
  },
  methods: {
    toProductDetail() {
      this.$router.push({
        name: "details",
        params: {
          brand: this.productsBrand,
          model: this.model,
        },
      });
    },
  },
};
</script>

<style lang="less">
.product-box {
  padding: 12px;
  flex: 0 0 25%;
  max-width: 25%;
}
@media screen and (max-width: 1461px) {
  .product-box {
    flex: 33.33333%;
    max-width: 33.33333%;
  }
}
@media screen and (max-width: 1009px) {
  .product-box {
    flex: 50%;
    max-width: 50%;
  }
}

// @media screen and (max-width: 557px) {
//   .product-box {
//     flex: 100%;
//     max-width: 100%;
//   }
// }

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
  // margin-bottom: 12px;
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
