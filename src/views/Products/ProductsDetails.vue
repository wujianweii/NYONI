<template>
  <div>
    <!-- 产品详情 -->
    <Carousel model="N2806" v-if="isMobile" />
    <div class="detail-container">
      <!-- background: 'url(' + require('../../assets/products/N2806/1.jpg') + ')'; -->

      <!-- <img src="../../assets/products/N2806/1.jpg" alt="" /> -->
      <!-- <div class="bg"></div> -->
      <ImgShow model="N2806" v-if="!isMobile" />
      <div class="col detail-text-container">
        <h1>
          NYONI N8520-120 Professional Art Standard Natural Wood Oily Custom
          Color Pencil Set With 24/36/48/72/120 Colors
        </h1>
        <el-divider />
        <h5>零售价</h5>
        <h5 class="price">$4.99</h5>
        <el-divider />
        <h5>购买链接</h5>
        <ul class="icon-ul">
          <li class="icon-li">
            <a href="" target="_blank" title="淘宝">
              <img src="../../assets/icon/2.jpg" alt="" />
            </a>
          </li>
          <li class="icon-li">
            <a href="" target="_blank" title="淘宝">
              <img src="../../assets/icon/2.jpg" alt="" />
            </a>
          </li>
          <li class="icon-li">
            <a href="" target="_blank" title="淘宝">
              <img src="../../assets/icon/2.jpg" alt="" />
            </a>
          </li>
          <li class="icon-li">
            <a href="" target="_blank" title="淘宝">
              <img src="../../assets/icon/2.jpg" alt="" />
            </a>
          </li>
        </ul>
        <el-divider />
        <h5>产品详情</h5>
        <div class="product-detail-item">
          <dl>
            <dt>Model Number:</dt>
            <dd>N2806</dd>
          </dl>
          <dl>
            <dt>Type:</dt>
            <dd>Oily Color Pencil</dd>
          </dl>
          <dl>
            <dt>Size:</dt>
            <dd>45*45*12cm</dd>
          </dl>
          <dl>
            <dt>Material:</dt>
            <dd>Basswood</dd>
          </dl>
          <dl>
            <dt>Package:</dt>
            <dd>Iron box, 29pcs/set, 32sets/ctn</dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 你可能喜欢 -->
    <h1 class="plr-20">You may also like</h1>
    <ProductsRecommend />
  </div>
</template>

<script>
import ImgShow from "@/components/ProductsDetail/ImgShow.vue";
import Carousel from "@/components/Common/Carousel.vue";
import ProductsRecommend from "@/components/Common/ProductsRecommend false.vue";
export default {
  components: {
    ImgShow,
    Carousel,
    ProductsRecommend,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    if (document.body.offsetWidth <= 576) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    window.addEventListener(
      "resize",
      () => {
        if (document.body.offsetWidth <= 576) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      false
    );
  },
};
</script>

<style lang="less">
.price {
  font-weight: 700;
  font-size: 18px;
  margin-top: 12px;
}
.icon-ul {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 12px;
}
.icon-li {
  flex: 0 0 40px;
  height: 40px;
}
.detail-container {
  display: flex;
  padding: 60px 0;
}
.detail-text-container {
  padding: 0 20px;
}
@media screen and (max-width: 576px) {
  .detail-container {
    flex-wrap: wrap;
    padding: 0;
  }
  .detail-text-container {
    flex: 0 0 100%;
  }
  .detail-text-container {
    padding: 20px;
  }
}

.product-detail-item {
  margin-top: 12px;
  dl {
    width: 100%;
    display: flex;
  }
  dt {
    width: 40%;
    padding: 4px 0;
    color: #666;
    float: left;
    overflow: hidden;
    margin-right: 10px;
    text-overflow: ellipsis;
  }
  dd {
    padding: 4px 0;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    margin: 0;
  }
}
// .bg {
//   width: 100px;
//   height: 100px;
//   // background-image: url("../../assets/products/N2806/1.jpg");
//   // background-image: "url(' + require('@/assets/products/N2806/1.jpg') + ')";
// }
</style>
