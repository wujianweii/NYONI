<template>
  <div class="two-lines-text">
    <a class="two-lines-text-link" target="_blank" :title="name"
      ><span class="title-con">{{ name }}</span></a
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.two-lines-text {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  height: 30px;
  font-size: 12px;
}
</style>
