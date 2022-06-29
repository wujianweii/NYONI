<template>
  <div class="">
    <div class="pb-40 container">
      <h1 class="detail-title">JIULING | NYONI FACTORY</h1>
      <h1 class="detail-content">
        Zhejiang Jiuling Brush Co., LTD focus on painting materials, beauty
        cosmetics product development and production
      </h1>
    </div>
    <!-- 公司介绍 -->
    <div class="row ptb-60 align-center">
      <img
        src="../../assets/company/jiuling.jpg"
        alt=""
        class="plr-50 col-lg-6 content-img"
      />
      <div class="plr-50 col-lg-6 content-text">
        <h2>Zhejiang Jiuling Brush Co., LTD</h2>
        <p>
          JIULING is a collection of production, research and development in one
          of the professional production and sales of high-grade pencils, makeup
          pens and cosmetics series of products enterprises, it owns FEIYAN,
          SHAONIANPAI, NYONI, KUAZI brands.
        </p>
      </div>
    </div>
    <!-- 发展历史 -->
    <img src="../../assets/company/jiulinghistory.jpg" alt="久灵发展历史" />
    <!-- 公司视频 -->
    <!-- <Title
      title="COMPANY VIDEO"
      title-text="To provide customers with cost-effective products"
    />
    <video
      class="length-auto"
      src="@/assets/video/NYONI-FACTORY-JIULING.mp4"
      controls
      preload="metadata"
    ></video> -->
    <!-- 证书展示 -->
    <!-- <Title
      title="CERTIFICATE SHOWING"
      title-text="To provide customers with cost-effective products"
    />
    <el-image
      class="length-auto"
      :src="require('@/assets/common/certificate.jpg')"
      fit="cover"
    /> -->
  </div>
</template>

<script>
// import Title from "@/components/Home/TitleComponents.vue";
export default {
  components: {
    // Title,
  },
  data() {
    return {
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
};
</script>

<style>
@media screen and (max-width: 991px) {
  .content-text {
    max-width: 495px;
    margin: 0 auto;
    padding: 0;
  }
  .content-img {
    max-width: 495px;
    margin: 0 auto 40px;
    padding: 0;
  }
}
</style>
