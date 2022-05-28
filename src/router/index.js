import { createRouter, createWebHistory } from "vue-router";
import home from "../views/Home.vue";
import about from "../views/About.vue";
import products from "../views/Products/Products.vue";
import detail from "../views/Products/ProductsDetails.vue";
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
    path: "/products",
    name: "products",
    component: products,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
