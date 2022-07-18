<template>
  <div class="container">
    <div class="pb-40">
      <h1 class="detail-title">{{ $t("about.hzmanqini.title") }}</h1>
      <h1 class="detail-content">{{ $t("about.hzmanqini.content") }}</h1>
    </div>
    <!-- 公司介绍 -->
    <div class="row ptb-60 align-center">
      <!-- <img
        src="../../assets/company/jiuling.jpg"
        alt=""
        class="plr-50 col-lg-6 content-img"
      /> -->
      <video
        class="pr-50 col-lg-6 content-video"
        src="@/assets/video/NYONI-FACTORY-JIULING.mp4"
        controls
        preload="metadata"
      ></video>
      <div class="plr-50 col-lg-6 content-text">
        <h2>{{ $t("about.hzmanqini.textTitle") }}</h2>
        <p>{{ $t("about.hzmanqini.textContent") }}</p>
      </div>
    </div>
    <a
      href="https://hzmanqini.en.alibaba.com/"
      title="杭州曼奇尼 阿里巴巴国际站"
      ><img
        class="mb-60"
        src="../../assets/company/hzmanqini_alibaba.jpg"
        alt="杭州曼奇尼 阿里巴巴国际站"
      />
    </a>

    <!-- 发展历史 -->
    <!-- <img
      class="pb-80"
      src="../../assets/company/authorization.jpg"
      alt="尼奥尼品牌唯一销售总代理授权"
    /> -->

    <!-- <el-image
      class="pb-80"
      :src="require('@/assets/company/authorization.jpg')"
      alt="尼奥尼品牌唯一销售总代理授权"
      z-index="9999"
      :lazy="true"
      :preview-src-list="[require('@/assets/company/authorization.jpg')]"
    /> -->
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
    max-width: 530px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .content-video {
    max-width: 530px;
    margin: 0 auto 40px;
    padding: 0;
  }
}
</style>
