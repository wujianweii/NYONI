<template>
  <el-col :span="6">
    <el-card class="product-item" :body-style="{ padding: '0' }">
      <el-image
        class="product-img"
        :src="require('@/assets/products/' + model + '1.jpg')"
        fit="cover"
        lazy
      />
      <TwoLinesText :name="name" />
    </el-card>
  </el-col>
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
};
</script>

<style scoped>
.product-item {
  width: 243px;
  height: 285px;
  padding: 8px;
  font-size: 16px;
}

.product-img {
  width: 220px;
  height: 220px;
}
</style>
