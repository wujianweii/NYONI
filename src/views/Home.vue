<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 公司介绍 -->
    <div class="company-introduction">
      <h2>尼奥尼-勾勒您艺术的方向</h2>
      <p>
        浙江久灵笔刷有限公司成立于1999年，是一家集产供研于一体的专业生产销售中高档铅笔系列产品的企业，旗下拥有飞雁、少年派、尼奥尼、绔姿等品牌。公司坐落于被誉为“中国生态第一县”之称的丽水市庆元县竹口镇工业园区。竹口镇被称为“中国铅笔小镇”，是中国铅笔生产企业的集聚地，铅笔产量占国内铅笔总量的四分之一强。浙江久笔刷有限公司是庆元县最早研发、生产和销售铅笔的企业之一，产销量始终稳居全县铅笔行业的前列。
      </p>
    </div>
    <!-- 轮播 -->
    <Banner />
    <!-- 产品 -->
    <ProductsList />
    <!-- 客户 -->
    <div class="enterprise-spirit relative">
      <!-- <img src="../assets/common/background.jpg" alt="" /> -->
      <div class="bg"></div>
      <div class="enterprise-spirit-text">
        <h2>以客户为中心</h2>
        <h3>比竞争者更好的满足顾客期望</h3>
        <p>
          全体浙江久灵人将继续弘扬“拼搏、进取、创新、求实”的企业精神，秉承“高标准、精细化、全程监控”的质量要求和“以客户为中心，比竞争者更好的满足顾客期望”的企业理念，
          解放思想，振奋精神，齐心协力，埋头苦干，创造久灵更加美好的明天!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import Banner from "@/components/Home/Banner.vue";
import ProductsList from "@/components/Home/ProductsList.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Header,
    ProductsList,
  },
};
</script>

<style lang="less">
.company-introduction {
  padding: 6rem 60px;
  max-width: 920px;
  margin: 0 auto;
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 28px;
  }
}
.bg {
  // filter: grayscale(100%);
  // opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.enterprise-spirit {
  height: 700px;
  background: url("../assets/common/background.jpg") no-repeat scroll center;
}
.enterprise-spirit-text {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  max-width: 700px;
  width: 700px;
  h2 {
    font-size: 50px;
    font-weight: 800;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    padding: 30px 0;
  }
}
@media screen and (max-width: 992px) {
  .enterprise-spirit-text {
    width: 90%;
    h2 {
      font-size: 34px;
      font-weight: 800;
    }
    h3 {
      font-size: 24px;
      font-weight: 500;
      padding: 18px 0;
    }
  }
}
</style>
