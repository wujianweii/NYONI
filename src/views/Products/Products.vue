<template>
  <div class="container">
    <div class="products-title">
      <h1>
        <span>{{ $t("products.title") }} :</span>
        <a
          href="javaScript:void(0)"
          class="brand"
          :class="{ active: productBrand == 'nyoni' }"
          @click="switchProductsBrand('nyoni')"
          >{{ $t("products.nyoni") }}</a
        >
        <span>/</span>
        <a
          href="javaScript:void(0)"
          class="brand"
          :class="{ active: productBrand == 'feiyan' }"
          @click="switchProductsBrand('feiyan')"
          >{{ $t("products.feiyan") }}</a
        >
      </h1>
      <h2 v-if="productBrand == 'nyoni'">{{ $t("products.nyoinTitle") }}</h2>
      <h2 v-if="productBrand == 'feiyan'">{{ $t("products.feiyanTitle") }}</h2>
    </div>
    <div class="categories">
      <ul v-if="productBrand == 'nyoni'">
        <li @click="switchCategories('color_pencil')">
          <span :class="{ active: categoriesChoose == 'color_pencil' }">{{
            $t("common.productsCategory.color_pencil")
          }}</span>
        </li>
        <li @click="switchCategories('sketch_pencil')">
          <span :class="{ active: categoriesChoose == 'sketch_pencil' }">{{
            $t("common.productsCategory.sketch_pencil")
          }}</span>
        </li>
        <li @click="switchCategories('charcoal_pencil')">
          <span :class="{ active: categoriesChoose == 'charcoal_pencil' }">{{
            $t("common.productsCategory.charcoal_pencil")
          }}</span>
        </li>
        <li @click="switchCategories('eraser')">
          <span :class="{ active: categoriesChoose == 'eraser' }">{{
            $t("common.productsCategory.eraser")
          }}</span>
        </li>
        <li @click="switchCategories('other_tools')">
          <span :class="{ active: categoriesChoose == 'other_tools' }">{{
            $t("common.productsCategory.other_tools")
          }}</span>
        </li>
      </ul>
      <ul v-if="productBrand == 'feiyan'">
        <li @click="switchCategories('color_pencil')">
          <span :class="{ active: categoriesChoose == 'color_pencil' }">{{
            $t("common.productsCategory.color_pencil")
          }}</span>
        </li>
        <li @click="switchCategories('school_office_pencil')">
          <span
            :class="{ active: categoriesChoose == 'school_office_pencil' }"
            >{{ $t("common.productsCategory.school_office_pencil") }}</span
          >
        </li>
      </ul>
    </div>
    <div class="product-list-container">
      <ProductList :products="productsList" />
    </div>
    <!-- <el-container>
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
      </el-main>
    </el-container> -->
  </div>
</template>
<script>
// import ProductMenu from "@/components/Common/ProductMenu.vue";
// import HotSaleList from "@/components/Products/HotSaleList.vue";
import ProductList from "@/components/Common/ProductList.vue";
// import hotsale from "@/modules/hotsale";
import nyoniProductsLists from "@/modules/nyoniProductsLists";
import feiyanProductsLists from "@/modules/feiyanProductsLists";
import { mapGetters, mapActions } from "vuex";
// import { useRoute } from "vue-router";
// import { ElMenu } from "element-plus";
export default {
  components: {
    // ProductMenu,
    // HotSaleList,
    ProductList,
    // ElMenu,
  },
  computed: {
    ...mapGetters({
      categoriesChoose: "getCategoriesChoose",
      productsBrand: "getProductsBrand",
    }),
  },
  data() {
    return {
      productBrand: "",
      productsList: [],
      nyoniProductsLists: nyoniProductsLists,
      feiyanProductsLists: feiyanProductsLists,
      // categoriesChoose: "all",
    };
  },
  watch: {
    productsBrand(val) {
      this.productBrand = val;
      // console.log("productsBranddproductsBrandproductsBrand");
      this.changeProductsList(val);
    },
  },
  // watch: {
  //   productBrand(val) {
  //     this.switchProductsBrand(val);
  //     // this.changeProductsList(val);
  //   },
  // },
  created() {
    // this.productsList = this.productsLists[this.categoriesChoose];
    this.changeProductsList();
    // let router = useRoute();
    // console.log(router);
  },
  methods: {
    ...mapActions(["changeCategoriesChoose", "changeProductsBrand"]),
    switchCategories(data) {
      this.changeCategoriesChoose(data);
      // this.productsList = this.productsLists[data];
      this.changeProductsList();
    },
    // 更换列表数据
    changeProductsList(data) {
      //created调用
      if (!data) {
        this.productBrand = this.$route.params.brand;
        this.changeProductsBrand(this.$route.params.brand);
        // console.log("this.$route.params.brand", this.$route.params.brand);
        // console.log("this.productsBrand", this.productsBrand);
      }

      if (this.productBrand == "nyoni") {
        this.productsList = this.nyoniProductsLists[this.categoriesChoose];
      }
      if (this.productBrand == "feiyan") {
        this.productsList = this.feiyanProductsLists[this.categoriesChoose];
      }
    },
    // 更换产品品牌
    switchProductsBrand(data) {
      this.$router.push({
        name: "products",
        params: {
          brand: data,
        },
      });
      this.changeProductsBrand(data);
      this.changeCategoriesChoose("color_pencil");

      // this.productBrand = this.$route.params.brand;
      // this.changeProductsList();
    },
  },
};
</script>
<style lang="less">
.brand {
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 31px;
  color: #000;
  text-transform: uppercase;
  margin: 0 12px;
}
.brand.active {
  border-bottom: 1px solid #000;
}
.brand.active:hover {
  border-bottom: 1px solid #000;
}
.brand:hover {
  border-bottom: 1px dashed #000;
  color: #000;
}

.products-title {
  padding: 40px 0;
  h1 {
    font-size: 18px;
    margin-bottom: 9px;
  }
  h2 {
    color: #6f6f6f;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    max-width: 940px;
  }
}
.categories {
  margin-top: 52px;
}
.categories ul {
  padding: 0;
  list-style: none;
  display: block;
  white-space: nowrap;
  overflow-y: auto;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
.categories ul li {
  margin: 0 1rem;
  display: inline-block;
  cursor: pointer;
}
.categories ul li span {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 35px;
  text-transform: uppercase;
}
.categories ul li span.active {
  border-bottom: 1px solid #000;
}
.categories ul li:hover span.active {
  border-bottom: 1px solid #000;
}
.categories ul li:hover span {
  border-bottom: 1px dashed #000;
}
.product-list-container {
  padding: 4rem 0;
}
</style>
