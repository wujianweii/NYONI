<template>
  <div class="row bb-eee">
    <el-image
      class="hot-sale-img"
      :src="require('@/assets/products/' + model + '1.jpg')"
      fit="cover"
      lazy
    />
    <TwoLinesText :name="name" />
  </div>
</template>
<script>
import TwoLinesText from "../Common/TwoLinesText.vue";
export default {
  props: {
    model: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    TwoLinesText,
  },
  // data() {
  //   return {
  //     url: "",
  //   };
  // },
};
</script>
<style>
.hot-sale-img {
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
}
.hot-sale-name {
  flex: auto;
}
</style>
