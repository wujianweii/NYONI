<template>
  <footer>
    <div class="footer-top">
      <div>
        <img src="../../assets/common/nyoni_white.png" alt="" />
        <!-- <h1>NYONI - DEFINE YOUR DIRECTION OF ART</h1> -->
      </div>
      <!-- 产品 -->
      <div>
        <h1>{{ $t("common.footer.procudts.h1") }}</h1>
        <a href="/products/nyoni">{{ $t("common.footer.procudts.nyoni") }}</a>
        <a href="/products/feiyan">{{ $t("common.footer.procudts.feiyan") }}</a>
      </div>
      <!-- 联系我们 -->
      <div>
        <h1>{{ $t("common.footer.contact.h1") }}</h1>
        <a href="tel:4008896590"
          >{{ $t("common.footer.contact.landline") }}: <br />400-8896-590</a
        >
        <a href="tel:+8618157898718"
          >{{ $t("common.footer.contact.phone") }}: <br />+86 18157898718</a
        >
        <a href="mailTo: nyoni@hzmanqini.comm"
          >{{ $t("common.footer.contact.email") }}: <br />nyoni@hzmanqini.com</a
        >
        <!-- <a href=""
          >Factory Address: No.1, Zhukou Industrial, Qingyuan, Lishui, Zhejiang,
          China.</a
        >
        <a href=""
          >Trade Address: Room 816, Block 5, Jinjiemeidi Commercial Center
          ,Zhuantang Community ,Xihu district, Hangzhou city, Zhejiang,
          China.</a
        > -->
      </div>
      <!-- 关于我们 -->
      <div>
        <h1>{{ $t("common.footer.about.h1") }}</h1>
        <a href="/about/jiuling">
          {{ $t("common.footer.about.factory1") }}: <br />{{
            $t("common.footer.about.factory2")
          }}</a
        >
        <!-- <a href="/about/hzmanqini"
          >{{ $t("common.footer.about.trade1") }}: <br />{{
            $t("common.footer.about.trade2")
          }}</a
        > -->
        <a href="javaScript:void(0)"
          >{{ $t("common.footer.about.trade1") }}: <br />{{
            $t("common.footer.about.trade2")
          }}</a
        >
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">©2022 NYONI DESIGNS</p>
      <p class="compinfo">
        {{ $t("common.footer.compinfo.compinfo") }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer-top {
  /* background-color: rgba(238, 241, 242, 0.4); */
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 80px 60px 40px;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  border-bottom: 1px solid rgba(151, 151, 151, 0.34);
  > div {
    flex: 0 0 25%;
  }
  img {
    width: 114px;
    margin-bottom: 14px;
  }
  h1 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #fff;
  }
  a {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #fff;
    display: block;
    overflow: hidden;
    // height: 14px;
    line-height: 18px;
  }
  a:hover {
    color: #fff;
  }
}
.footer-bottom {
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 40px 60px 40px;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  .compinfo {
    text-align: right;
    color: #c3c3c3;
    line-height: 16px;
    max-width: 380px;
    font-weight: 300;
    font-size: 12px;
  }
  .copyright {
    margin-bottom: 20px;
    font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .footer-top {
    flex-wrap: wrap;
    padding: 40px 20px 0px;
    > div {
      flex: 0 0 100%;
      margin-bottom: 20px;
    }
  }
  .footer-bottom {
    padding: 20px;
    flex-wrap: wrap;
    > p {
      flex: 0 0 100%;
    }
    .copyright {
      margin-bottom: 20px;
      font-size: 14px;
    }
    .compinfo {
      text-align: left;
    }
  }
}
</style>
