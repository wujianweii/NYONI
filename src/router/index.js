import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import nyoni from "../views/About/Nyoni.vue";
import jiuling from "../views/About/Jiuling.vue";
// import hzmanqini from "../views/About/Hzmanqini.vue";
import contact from "../views/Contact.vue";
import buy from "../views/Buy/Buy.vue";
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
    path: "/about/nyoni",
    name: "nyoni",
    component: nyoni,
  },
  {
    path: "/about/jiuling",
    name: "jiuling",
    component: jiuling,
  },
  // {
  //   path: "/about/hzmanqini",
  //   name: "hzmanqini",
  //   component: hzmanqini,
  // },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/buy",
    name: "buy",
    component: buy,
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
