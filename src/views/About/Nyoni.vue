<template>
  <div class="container">
    <div class="pb-40">
      <h1 class="detail-title">{{ $t("about.nyoni.title") }}</h1>
      <h1 class="detail-content">{{ $t("about.nyoni.content") }}</h1>
    </div>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        placement="top"
      >
        <el-card>
          {{ activity.content[isEnOrZh] }}
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <ProductsList class="pt-80" />
  </div>
</template>

<script>
import ProductsList from "@/components/Home/ProductsList.vue";
export default {
  name: "NYONI",
  components: {
    ProductsList,
  },
  data() {
    return {
      isEnOrZh: window.localStorage.getItem("language"),
      activities: [
        {
          content: {
            en: "On December 14, The trademark of NYONI was successfully registered",
            zh: "12月14日尼奥尼商标成功注册",
          },
          timestamp: "2014",
        },
        {
          content: {
            en: "NYONI art pencil, NYONI charcoal, NYONI water-soluble color lead and other products successfully entered the market",
            zh: "尼奥尼美术铅笔,尼奥尼炭笔,尼奥尼水溶性彩铅等系列产品成功入市",
          },
          timestamp: "2015",
        },
        {
          content: {
            en: "NYONI art pencil, charcoal series stand out in the same industry in the country, by the national art candidates generally welcome",
            zh: "尼奥尼美术铅笔,炭笔系列在全国同行业脱颖而出,受到全国艺考生的普遍欢迎",
          },
          timestamp: "2016",
        },
        {
          content: {
            en: "NYONI products have been in short supply, NYONI charcoal in a difficult situation.",
            zh: "尼奥尼产品一直供不应求,尼奥尼炭笔处于一笔难求的局面。",
          },
          timestamp: "2017",
        },
        {
          content: {
            en: "NYONI, charcoal, NYONI's products following the performance is in shortage state, at the same time, NYONI's brand extension, NYONI's eraser, pen, NYONI charcoal pen, NYONI's water chalk art painting material success in the market, such as economic strategy to promote the company headquarters, a preliminary basis for the product, at the same time one of NYONI's brand influence and popularity.",
            zh: "尼奥尼炭笔新上市,尼奥尼产品继绩处于供不应求状态,同时尼奥尼品牌实行延伸,尼奥尼橡皮笔,尼奥尼炭条笔,尼奥尼水粉笔等美术画材成功入市,为推行公司总部经济战略,初步打下产品基础,同时尽一步提升尼奥尼品牌的影响力和知名度。",
          },
          timestamp: "2018",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.detail-title {
  margin-bottom: 1.5rem;
  color: #6f6f6f;
  font-size: 12px;
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
