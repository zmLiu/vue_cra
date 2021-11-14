import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showComingSoon: false,
    twitter: "https://twitter.com/Era7_official",
    telegram: "https://t.me/joinchat/aF3LUIC8PKVhNDA6",
    discord: "https://discord.gg/jtFRzTv5Zw",
  },
  getters: {
    showComingSoon: (state) => state.showComingSoon,
    twitter: (state) => state.twitter,
    telegram: (state) => state.telegram,
    discord: (state) => state.discord,
  },
  mutations: {
    Set_ComingSoon: (state, info) => {
      state.showComingSoon = info;
    },
  },
  actions: {},
  modules: {},
});
