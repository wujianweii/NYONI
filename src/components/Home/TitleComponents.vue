<template>
  <div class="relative title">
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
<style>
.title {
  height: 60px;
  text-align: center;
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
}
.title-text {
  font-size: 14px;
  color: #eee;
}
</style>
