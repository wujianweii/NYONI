<template>
  <div class="portfolio-list">
    <h2>{{ $t("home.productsList.title") }}</h2>
    <p class="short-content">
      {{ $t("home.productsList.content") }}
    </p>
    <div class="row items">
      <!-- 图片 color_pencil -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('color_pencil')"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/color_pencil.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/color_pencil.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.color_pencil") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>

      <!-- 图片 sketch_pencil -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('sketch_pencil')"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/sketch_pencil.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/sketch_pencil.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.sketch_pencil") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>

      <!-- 图片 charcoal_pencil -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('charcoal_pencil')"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/charcoal_pencil.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/charcoal_pencil.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.charcoal_pencil") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>

      <!-- 图片 school_office_pencil -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('school_office_pencil')"
        v-if="routerName != 'nyoni'"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/school_office_pencil.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/school_office_pencil.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.school_office_pencil") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>

      <!-- 图片 eraser -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('eraser')"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/eraser.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/eraser.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.eraser") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>

      <!-- 图片 other_tools -->
      <a
        href="javaScript:void(0)"
        class="col-12 col-sm-6 p-item animateFadeIn"
        @click="toProducts('other_tools')"
      >
        <div class="p-img">
          <div class="logo">
            <img src="../../assets/common/nyoni_white.png" alt="" />
          </div>
          <img
            class="colored animateRight"
            src="../../assets/products/catalog/other_tools.jpg"
            alt=""
          />
          <img
            class="grey animateRight"
            src="../../assets/products/catalog/other_tools.jpg"
            alt=""
          />
        </div>
        <div class="p-text animateFadeIn">
          <h3 class="h3-static">
            {{ $t("common.productsCategory.other_tools") }}
          </h3>
          <p>NYONI - Define Your Direction Of Art</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { useRouter } from "vue-router";
export default {
  data() {
    return {
      routerName: this.$route.name,
    };
  },
  methods: {
    ...mapActions(["changeCategoriesChoose", "changeProductsBrand"]),
    toProducts(data) {
      this.changeCategoriesChoose(data);
      // const router = useRouter();
      // this.$base.toRouter("products", { brand: "NYONI" });
      // router.push({ name: "products" });

      if (data == "school_office_pencil") {
        this.changeProductsBrand("feiyan");
        this.$router.push({
          name: "products",
          params: {
            brand: "feiyan",
          },
        });
      } else {
        this.changeProductsBrand("nyoni");
        this.$router.push({
          name: "products",
          params: {
            brand: "nyoni",
          },
        });
      }
    },
  },
};
</script>

<style lang="less">
.portfolio-list {
  h2 {
    margin-bottom: 1rem;
  }
  .short-content {
    max-width: 520px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  items {
    margin-top: 3rem;
    margin-bottom: 20px;
  }
}

.portfolio-list .p-item:nth-child(1) {
  animation-delay: 200ms;
}
.portfolio-list .p-item {
  margin-bottom: 25px;
  transition: all 0.25s ease !important;
  // opacity: 0;
}
.animateFadeIn {
  animation: fade-in linear 300ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
}

.animateRight {
  animation: animateRight linear 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes animateRight {
  0% {
    clip-path: inset(0% 100% 0% 0%);
  }
  100% {
    clip-path: inset(0% 0 0% 0%);
  }
}

//

.portfolio-list h2 {
  margin-bottom: 2rem;
  // opacity: 0;
}
.portfolio-list h2.h5 {
  margin-bottom: 1rem;
}

.portfolio-list .short-content {
  max-width: 660px;
}
.portfolio-list .short-content p {
  font-size: 16px;
  line-height: 28px;
}

.portfolio-list .items {
  margin-top: 3rem;
  margin-bottom: 20px;
}
.portfolio-list .items:nth-child(even) {
  margin-top: 0%;
}

.portfolio-list .p-item {
  margin-bottom: 25px;
  transition: all 0.25s ease !important;
  // opacity: 0;
}
.portfolio-list .p-item:nth-child(1) {
  animation-delay: 200ms;
}
.portfolio-list .p-item:nth-child(2) {
  animation-delay: 500ms;
}
.portfolio-list .p-item:nth-child(3) {
  animation-delay: 300ms;
}
.portfolio-list .p-item:nth-child(4) {
  animation-delay: 400ms;
}
.portfolio-list .p-item h3 {
  margin-bottom: 0;
}
.portfolio-list .p-item img {
  transition: all 1.5s ease;
}
.portfolio-list .p-item:nth-child(2) {
  margin-top: 0;
}
.portfolio-list .p-item:nth-child(odd) {
  padding-right: 15px;
  margin-top: 0;
}
.portfolio-list .p-item:nth-child(even) {
  padding-left: 15px;
}
.portfolio-list .p-item:first-child {
  margin-top: 0;
}
.portfolio-list .p-item:hover {
  text-decoration: none;
  color: #000;
}
.portfolio-list .p-item:hover h3 {
  opacity: 0.7;
}
.portfolio-list .p-item:hover ul li {
  opacity: 0.8;
}
.portfolio-list .p-item:hover img {
  transform: scale(1.05) translateZ(0);
}
.portfolio-list .p-item .p-img {
  background-color: #000;
  max-width: 540px;
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 30vw;
  position: relative;
}
.portfolio-list .p-item .p-img .logo {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.portfolio-list .p-item .p-img .logo img {
  max-width: 125px;
  position: static;
  background: transparent;
}
.portfolio-list .p-item .p-img canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.portfolio-list .p-item .p-img img {
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.7s ease;
  background: #fff;
}
.portfolio-list .p-item .p-img img.colored {
  opacity: 0;
}
.portfolio-list .p-item .p-img img.grey {
  filter: grayscale(100%);
  opacity: 0.5;
}
.portfolio-list .p-item:hover img.colored {
  opacity: 1;
}
.portfolio-list .p-item:hover img.grey {
  opacity: 0;
}
.portfolio-list .p-item:hover .logo img {
  transform: scale(1) translateZ(0);
}
.portfolio-list .p-item .p-text ul {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 350px;
  line-height: 1.3rem;
}
.portfolio-list .p-item .p-text ul li {
  display: inline;
  color: #9e9e9e;
  font-size: 12px !important;
  line-height: 16px !important;
}
.portfolio-list .p-item .p-text ul li::before {
  content: "|";
  padding-right: 5px;
  padding-left: 5px;
}
.portfolio-list .p-item .p-text ul li:first-child::before {
  display: none;
  content: "";
}
// .portfolio-list .p-item .p-img {

.h3-static {
  color: #000;
  font-size: 14px;
  font-weight: 400;
}
.p-text {
  p {
    display: inline;
    color: #9e9e9e;
    font-size: 12px !important;
    line-height: 16px !important;
  }
}

// 自适应

@media screen and (max-width: 992px) {
  .portfolio-list .p-item {
    max-height: 1000px;
  }
}
@media screen and (max-width: 576px) {
  .portfolio-list .p-item {
    margin-bottom: 40px;
    max-height: 500px;
    padding: 0 !important;
    width: 100%;
  }
  // .portfolio-list {
  //   padding: 5rem 20px;
  // }
  .portfolio-list .items {
    margin-right: 0;
    margin-left: 0;
  }
  .portfolio-list .p-item .p-img {
    height: 66vw;
  }
}
@media screen and (max-width: 350px) {
  .portfolio-list .p-item h3 {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 576px) {
  .portfolio-list .p-item:nth-child(2) {
    margin-top: 30px;
  }
  .portfolio-list .p-item:nth-child(odd) {
    padding-right: 30px;
    margin-top: -30px;
    padding-bottom: 25px;
  }
  .portfolio-list .p-item:nth-child(even) {
    padding-left: 30px;
  }
  .portfolio-list .p-item:first-child {
    margin-top: 0;
  }
}

@media screen and (min-width: 992px) {
  .portfolio-list .p-item .p-text ul li {
    font-size: 1rem;
    line-height: inherit;
  }
  .portfolio-list .p-item:nth-child(2) {
    margin-top: 70px;
  }
  .portfolio-list .p-item:nth-child(odd) {
    padding-right: 30px;
    margin-top: -70px;
    padding-bottom: 0;
  }
  .portfolio-list .p-item:nth-child(even) {
    padding-left: 30px;
  }
  .portfolio-list .p-item:first-child {
    margin-top: 0;
  }
  .portfolio-list .p-item {
    margin-bottom: 70px;
    max-height: 100%;
  }
  .portfolio-list .p-item .p-img,
  .portfolio-list .p-item .p-img .gatsby-image-wrapper {
    max-height: 600px;
  }
}

@media screen and (min-width: 1400px) {
  .portfolio-list .p-item .p-img {
    margin-bottom: 22px;
    height: 28vw;
  }
}

@media screen and (min-width: 1600px) {
  .portfolio-list .p-item .p-text ul li {
    font-size: 0.75rem;
  }
  .portfolio-list .p-item .p-img {
    margin-bottom: 22px;
    height: 24vw;
  }
}
</style>
