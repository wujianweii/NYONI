import { createStore } from "vuex";
import common from "./modules/common";
import products from "./modules/products";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    products,
  },
});
