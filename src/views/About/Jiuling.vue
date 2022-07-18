<template>
  <div class="container">
    <div class="pb-40">
      <h1 class="detail-title">{{ $t("about.jiuling.title") }}</h1>
      <h1 class="detail-content">{{ $t("about.jiuling.content") }}</h1>
    </div>
    <!-- 公司介绍 -->
    <div class="row ptb-60 align-center">
      <img
        src="../../assets/company/jiuling.jpg"
        alt=""
        class="pr-50 col-lg-6 content-img"
      />
      <div class="plr-50 col-lg-6 content-text">
        <h2>{{ $t("about.jiuling.textTitle") }}</h2>
        <p>{{ $t("about.jiuling.textContent") }}</p>
      </div>
    </div>
    <!-- 发展历史 -->
    <img src="../../assets/company/jiulinghistory.jpg" alt="久灵发展历史" />
    <a
      href="https://jiulingpencil.en.alibaba.com/"
      title="浙江久灵 阿里巴巴国际站"
      ><img
        class="mtb-60"
        src="../../assets/company/jiuling_alibaba.jpg"
        alt="浙江久灵 阿里巴巴国际站"
      />
    </a>
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
    padding: 0 20px;
  }
}
</style>
