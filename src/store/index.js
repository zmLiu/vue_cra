import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showComingSoon: false,
    twitter: "https://twitter.com/Era7_official",
    telegram: "https://t.me/joinchat/aF3LUIC8PKVhNDA6",
    discord: "https://discord.gg/jtFRzTv5Zw",
    facebook: "https://www.facebook.com/groups/era7official",
    reddit: "https://www.reddit.com/user/Era7_Official",
  },
  getters: {
    showComingSoon: (state) => state.showComingSoon,
    twitter: (state) => state.twitter,
    telegram: (state) => state.telegram,
    discord: (state) => state.discord,
    facebook: (state) => state.facebook,
    reddit: (state) => state.reddit,
  },
  mutations: {
    Set_ComingSoon: (state, info) => {
      state.showComingSoon = info;
    },
  },
  actions: {},
  modules: {},
});
