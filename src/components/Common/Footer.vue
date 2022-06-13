<template>
  <footer>
    <div class="footer-top">
      <div>
        <img src="../../assets/common/nyoni_white.png" alt="" />
        <!-- <h1>NYONI - DEFINE YOUR DIRECTION OF ART</h1> -->
      </div>
      <div>
        <h1>PRODUCTS</h1>
        <a href="">NYONI</a>
        <a href="">FEIYAN</a>
      </div>

      <div>
        <h1>CONTACT</h1>
        <a href="">Landline: <br />400-8896-590</a>
        <a href="">Phone: <br />+86 18157898718</a>
        <a href="">Email: <br />nyoni@hzmanqini.com</a>
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
      <div>
        <h1>ABOUT US</h1>
        <a href=""> Factory: <br />Zhejiang Jiuling Brush Co., Ltd</a>
        <a href="">Trade: <br />Hangzhou Manqini Stationery Co., Ltd</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">©2022 NYONI DESIGNS</p>
      <p class="compinfo">
        Avex is a eCommerce Agency and Shopify Plus agency in New York City.
        Avex specializes in web design, Shopify Plus eCommerce, development,
        design, email marketing and ecommerce optimization. Avex is rated 5 out
        of 5 on Google Clutch.co.
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
  }
  a {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 14px;
    color: #fff;
    display: block;
    overflow: hidden;
    // height: 14px;
    line-height: 14px;
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
    max-width: 480px;
    font-weight: 300;
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
    }
    .compinfo {
      text-align: left;
    }
  }
}
</style>
