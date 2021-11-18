import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue"
import comingSoon from "./../views/comingSoon/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
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
