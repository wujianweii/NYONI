<template>
  <el-breadcrumb class="p-20">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Products</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
