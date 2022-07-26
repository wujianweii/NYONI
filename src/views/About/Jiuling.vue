<template>
  <div class="container">
    <div class="pb-40">
      <h1 class="detail-title">{{ $t("about.jiuling.title") }}</h1>
      <h1 class="detail-content">{{ $t("about.jiuling.content") }}</h1>
    </div>
    <!-- 公司介绍 -->
    <!-- <div class="row ptb-60 align-center">
      <img
        src="../../assets/company/jiuling.jpg"
        alt=""
        class="pr-50 col-md-6 content-img"
      />
      <div class="plr-50 col-md-6 content-text">
        <h2>{{ $t("about.jiuling.textTitle") }}</h2>
        <p>{{ $t("about.jiuling.textContent") }}</p>
      </div>
    </div> -->
    <!-- 发展历史 -->
    <img
      class="pb-60"
      src="../../assets/company/jiulinghistory.jpg"
      alt="久灵发展历史"
    />
    <!-- <a
      href="https://jiulingpencil.en.alibaba.com/"
      title="浙江久灵 阿里巴巴国际站"
      ><img
        class="mtb-60"
        src="../../assets/company/jiuling_alibaba.jpg"
        alt="浙江久灵 阿里巴巴国际站"
      />
    </a> -->
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
    <!-- 公司介绍 -->
    <h2 class="company-introduction-title">公司介绍</h2>
    <div class="row">
      <div class="company-introduction-content content-left">
        <p>{{ $t("jiuling.companyIntroduction.p1") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p2") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p3") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p4") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p5") }}</p>
      </div>
      <div class="company-introduction-content content-right">
        <p>{{ $t("jiuling.companyIntroduction.p6") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p7") }}</p>
        <p>{{ $t("jiuling.companyIntroduction.p8") }}</p>
      </div>
    </div>
    <!-- 企业荣誉 -->
    <h2 class="pt-60">企业荣誉</h2>
    <MixImageSwiperVue file="company/enterpriseHonor/" />
    <!-- 企业环境 -->
    <h2 class="pt-60">公司环境</h2>
    <MixImageSwiperVue
      file="company/companyEnvironment/"
      class="pb-60"
      :swiperNum="2"
      :ImageNum="3"
    />
  </div>
</template>

<script>
// import Title from "@/components/Home/TitleComponents.vue";
import MixImageSwiperVue from "@/components/Common/MixImageSwiper.vue";
export default {
  components: {
    MixImageSwiperVue,
    // Title,
  },
  data() {
    return {
      isEnOrZh: window.localStorage.getItem("language"),
    };
  },
};
</script>

<style lang="less">
@media screen and (max-width: 768px) {
  .content-text {
    max-width: 384px;
    margin: 0 auto;
    padding: 0;
    // padding: 20px 0 0 0;
  }
  .content-img {
    max-width: 384px;
    margin: 0px auto 40px;
    padding: 0 20px;
  }
}
.company-introduction-content {
  text-indent: 2em;
  max-width: 50%;
  p {
    padding-bottom: 1em;
  }
}
.content-left {
  padding-right: 2%;
}
.content-right {
  padding-left: 2%;
}
@media screen and (max-width: 768px) {
  .company-introduction-content {
    max-width: 100%;
  }
  .content-left {
    padding-right: 0;
  }
  .content-right {
    padding-left: 0;
  }
}
</style>
