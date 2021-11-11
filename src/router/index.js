import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/home/home.vue";
import comingSoon from "./../views/comingSoon/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coming_soon",
    name: "comingSoon",
    component: comingSoon,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
