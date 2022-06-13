<template>
  <div>
    <!-- 产品详情 -->
    <div class="flex">
      <!-- background: 'url(' + require('../../assets/products/N2806/1.jpg') + ')'; -->

      <!-- <img src="../../assets/products/N2806/1.jpg" alt="" /> -->
      <!-- <div class="bg"></div> -->
      <ImgShow model="N2806" />
      <div class="col plr-20">
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
            <dt>Material:</dt>
            <dd>Basswood</dd>
          </dl>
          <dl>
            <dt>Package:</dt>
            <dd>Iron box, 29pcs/set, 32sets/ctn</dd>
          </dl>
          <dl>
            <dt>Place of Origin:</dt>
            <dd>China</dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 你可能喜欢 -->
    <h1>You might also be interested in</h1>
    <ProductsRecommend />
  </div>
</template>

<script>
import ImgShow from "@/components/ProductsDetail/ImgShow.vue";
import ProductsRecommend from "@/components/Common/ProductsRecommend false.vue";
export default {
  components: {
    ImgShow,
    ProductsRecommend,
  },
  data() {
    return {};
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
.product-detail-item {
  margin-top: 12px;
  dl {
    width: 580px;
    display: flex;
  }
  dt {
    width: 180px;
    padding: 4px 0;
    color: #666;
    float: left;
    overflow: hidden;
    margin-right: 10px;
    text-overflow: ellipsis;
  }
  dd {
    padding: 4px 0;
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
