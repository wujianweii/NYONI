<template>
  <div class="grid">
    <ul class="row">
      <li
        class="col-3 grid-li"
        v-for="(buyItem, index) in buyList"
        :key="index"
      >
        <div class="grid-item">
          <a :href="buyItem.buyLink" target="_blank">
            <el-image
              class="buy-img"
              :src="require('@/assets/buy/' + buyItem.buyType + '.jpg')"
              fit="cover"
              :lazy="lazy"
            >
              <template #placeholder>
                <div class="image-slot"></div>
              </template>
            </el-image>
          </a>
          <div class="box-info p-20">
            <h2>
              {{ isEnOrZh == "en" ? buyItem.content.en : buyItem.content.zh }}
            </h2>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    buyList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
};
</script>

<style lang="less">
.grid {
  clear: both;
  padding: 0 10px;
}
.grid-li {
  position: relative;
  float: left;
  // padding-left: 35px;
  // padding-bottom: 35px;
  padding: 0 10px 40px;
  box-sizing: border-box;
}

.buy-img {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  transform: translateZ(0);
  img {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    will-change: transform, filter;
  }
  img:hover {
    transform: scale(1.05);
  }
}
.grid-item {
  border: 1px solid #f4f7f6;
}
.box-info {
  position: relative;
  clear: both;
  background-color: #fff;
  h2 {
    font-size: 16px;
    margin-bottom: 0;
  }
}

.col-3 {
  width: 33.33333%;
}
@media screen and (max-width: 1400px) {
  .col-3 {
    width: 33.33333%;
  }
}
@media screen and (max-width: 768px) {
  .col-3 {
    width: 50%;
  }
}
@media screen and (min-width: 1400px) {
  .col-3 {
    width: 25%;
  }
}
</style>
