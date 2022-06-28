<template>
  <div class="col detail-text-container">
    <h1 class="divider-bottom">
      {{ product[language].name }}
    </h1>
    <!-- 价格 -->
    <h5 class="font-500">{{ $t("details.price") }}</h5>
    <h5 class="price" v-if="language == 'en'">
      <span>$ </span>
      <span v-if="product.price">{{ (product.price / 6).toFixed(2) }}</span>
      <span v-else>{{ (product.sort[selectIndex].price / 6).toFixed(2) }}</span>
    </h5>
    <h5 class="price" v-if="language == 'zh'">
      <span>¥ </span>
      <span v-if="product.price">{{ product.price }}</span>
      <span v-else>{{ product.sort[selectIndex].price }}</span>
    </h5>
    <!-- 购买链接 -->
    <!-- <h5 class="divider-top">{{ $t("details.buyLink") }}</h5>
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
    </ul> -->
    <!-- 型号 -->
    <h5 class="divider-top" v-if="product[language].sort">
      {{ product[language].sort }}
    </h5>
    <ul class="product-sort" v-if="product[language].sort">
      <li
        v-for="(sort, index) in product.sort"
        :key="index"
        @click="chooseIndex(index)"
        :class="{ active: selectIndex == index }"
      >
        <span v-if="sort.sort[language]">{{ sort.sort[language] }}</span>
        <span v-else>{{ sort.sort }}</span>
      </li>
    </ul>
    <!-- 产品文案详情 -->
    <h5 class="divider-top">{{ $t("details.productDetails") }}</h5>
    <div class="product-detail-item">
      <dl>
        <dt>{{ $t("details.model") }}:</dt>
        <dd v-if="product.sort && product.sort[selectIndex].model">
          {{ product.sort[selectIndex].model }}
        </dd>
        <dd v-else>{{ product.model }}</dd>
      </dl>
      <dl>
        <dt>{{ $t("details.type") }}:</dt>
        <dd>{{ product[language].type }}</dd>
      </dl>
      <dl v-if="product.sort && product.sort[selectIndex].size">
        <dt>{{ $t("details.size") }}:</dt>
        <dd>{{ product.sort[selectIndex].size }}cm</dd>
      </dl>
      <dl>
        <dt>{{ $t("details.material") }}:</dt>
        <dd>{{ product[language].material }}</dd>
      </dl>
      <dl>
        <dt>{{ $t("details.package") }}:</dt>
        <dd>{{ product[language].package }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    language: {
      type: String,
      default: "zh",
    },
  },
  data() {
    return {
      selectIndex: 0,
    };
  },
  methods: {
    chooseIndex(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="less">
.font-500 {
  font-weight: 500;
}
.product-detail-item {
  margin-top: 12px;
  dl {
    width: 100%;
    display: flex;
  }
  dt {
    width: 120px;
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
.product-sort {
  display: felx;
  flex-wrap: wrap;
  justify-content: center;
  // margin-top: 12px;
  li {
    cursor: pointer;
    display: inline-block;
    border: 1px solid #666;
    padding: 12px 0;
    line-height: 1;
    font-size: 12px;
    color: #000;
    margin-right: 12px;
    margin-top: 12px;
    border-radius: 30px;
    width: 70px;
    text-align: center;
    background: #fff;
  }
  li:hover {
    border: 1px solid #000;
  }
  li.active {
    background: #000;
    border: 1px solid #000;
    color: #fff;
  }
}
.divider-bottom {
  border-bottom: 1px solid #eee;
  padding-bottom: 36px;
  margin-bottom: 36px;
  display: inline-block;
  font-weight: 500;
}
.divider-top {
  padding-top: 18px;
  margin-top: 18px;
  font-weight: 500;
}
</style>
