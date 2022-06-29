<template>
  <div class="relative title-title">
    <div class="title-bg">{{ title }}</div>
    <div class="title-block">
      <h1 class="title-h">{{ title }}</h1>
      <p class="title-text">
        {{ titleText }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.title-title {
  height: 80px;
  text-align: center;
  margin: 20px 0;
}
.title-bg {
  font-size: 40px;
  color: #eee;
  font-weight: 700;
}
.title-block {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.title-h {
  font-size: 30px;
  font-weight: 700;
  color: #000;
}
.title-text {
  font-size: 14px;
  color: #eee;
}
</style>
