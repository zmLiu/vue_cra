import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showComingSoon: false,
  },
  getters: {
    showComingSoon: (state) => state.showComingSoon,
  },
  mutations: {
    Set_ComingSoon: (state, info) => {
      state.showComingSoon = info;
    },
  },
  actions: {},
  modules: {},
});
