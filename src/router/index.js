import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import about from "../views/About.vue";
import products from "../views/Products/Products.vue";
// import nyoni from "../views/Products/NyoniProducts.vue";
// import feiyan from "../views/Products/FeiyanProducts.vue";
import details from "../views/Products/ProductsDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/products/:brand",
    name: "products",
    component: products,
  },
  {
    path: "/products/:brand/:model",
    name: "details",
    component: details,
  },
  // {
  //   path: "/products/nyoni",
  //   name: "products",
  //   component: nyoni,
  // },
  // {
  //   path: "/products/feiyan",
  //   name: "products",
  //   component: feiyan,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  // const currentRouterName = router.currentRoute.value.name;
  // console.log(currentRouterName);
  // console.log(currentRouterName !== "home");
  // if (currentRouterName !== "home") {
  window.scrollTo(0, 0);
  // }
});
export default router;
