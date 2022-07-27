<template>
  <div class="buy-container">
    <div class="pb-40 pl-20">
      <h1 class="detail-title">{{ $t("buy.title") }}</h1>
      <!-- <h1 class="detail-content">{{ $t("about.nyoni.content") }}</h1> -->
    </div>
    <BuyList :buyList="buyList" />
  </div>
</template>

<script>
import BuyList from "./BuyList.vue";
export default {
  name: "NYONI",
  components: {
    BuyList,
  },
  data() {
    return {
      isEnOrZh: window.localStorage.getItem("language"),
      buyList: [
        {
          content: {
            en: "NYONI Tmall Flagship Store",
            zh: "尼奥尼天猫旗舰店",
          },
          buyType: "tianmao",
          buyLink: "https://nyoni.tmall.com",
        },
        {
          content: {
            en: "NYONI Jingdong Flagship Store",
            zh: "尼奥尼京东旗舰店",
          },
          buyType: "jingdong",
          buyLink: "https://mall.jd.com/index-982568.html",
        },
        {
          content: {
            en: "NYONI Pinduoduo Flagship Store",
            zh: "尼奥尼拼多多旗舰店",
          },
          buyType: "pinduoduo",
          buyLink:
            "http://mobile.pinduoduo.com/mall_page.html?mall_id=609785812",
        },
        {
          content: {
            en: "NYONI Alibaba Zhejiang Jiuling Pencil & Brush Co.,Ltd",
            zh: "尼奥尼 阿里巴巴国际站 浙江久灵笔刷有限公司",
          },
          buyType: "alibaba",
          buyLink: "https://jiulingpencil.en.alibaba.com",
        },
        {
          content: {
            en: "NYONI Alibaba Hangzhou Manqini Stationery Co.,Ltd",
            zh: "尼奥尼 阿里巴巴国际站 杭州曼奇尼文化用品有限公司",
          },
          buyType: "alibaba",
          buyLink: "https://hzmanqini.en.alibaba.com/",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.buy-container {
  position: relative;
  width: 1905px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 56px 60px;
  clear: both;
}
@media screen and (max-width: 768px) {
  .buy-container {
    padding: 0;
  }
}
.detail-title {
  margin-bottom: 1.5rem;
  color: #6f6f6f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6em;
  letter-spacing: 1.5px;
}
.detail-content {
  max-width: 940px;
  color: #000;
  margin-bottom: 1rem;
}
</style>
