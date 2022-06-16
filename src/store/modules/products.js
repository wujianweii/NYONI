const state = {
  scrollHeight: 0,
  categoriesChoose: "color_pencil",
  productsBrand: "nyoni",
};

const getters = {
  getScrollHeight: (state) => state.scrollHeight,
  getCategoriesChoose: (state) => state.categoriesChoose,
  getProductsBrand: (state) => state.productsBrand,
};

const mutations = {
  setScrollHeight(state, scrollHeight) {
    state.scrollHeight = scrollHeight;
  },
  setCategoriesChoose(state, categoriesChoose) {
    state.categoriesChoose = categoriesChoose;
  },
  setProductsBrand(state, productsBrand) {
    state.productsBrand = productsBrand;
  },
};
const actions = {
  // 保存滚动高度
  async changeScrollHeight({ commit }, scrollHeight) {
    commit("setScrollHeight", scrollHeight);
  },
  // 保存产品类目选择
  async changeCategoriesChoose({ commit }, categoriesChoose) {
    commit("setCategoriesChoose", categoriesChoose);
  },
  // 切换产品品牌
  async changeProductsBrand({ commit }, productsBrand) {
    // console.log(productsBrand);
    commit("setProductsBrand", productsBrand);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
