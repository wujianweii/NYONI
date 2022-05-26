import { createRouter, createWebHistory } from "vue-router";
import home from "../views/HomeView.vue";
import about from "../views/AboutView.vue";
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
