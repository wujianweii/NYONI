<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Product Categories</span>
            </div>
          </template>
          <el-menu mode="horizontal">
            <ProductMenu />
          </el-menu>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Hot Sale</span>
            </div>
          </template>
          <HotSaleList :products="hotsale" />
        </el-card>
      </el-aside>
      <el-main>
        <ProductList :products="hotsale" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import ProductMenu from "@/components/Common/ProductMenu.vue";
import HotSaleList from "@/components/Products/HotSaleList.vue";
import ProductList from "@/components/Common/ProductList.vue";
import hotsale from "@/modules/hotsale";
import { ElMenu } from "element-plus";
export default {
  components: {
    ProductMenu,
    HotSaleList,
    ProductList,
    ElMenu,
  },
  data() {
    return {
      hotsale: hotsale,
    };
  },
};
</script>
<style scope>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.el-container .el-main {
  padding: 0 20px;
}
</style>
