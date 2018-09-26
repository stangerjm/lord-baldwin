import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home")
    },
    {
      path: "/music",
      name: "Music",
      component: () => import("../views/baldwin-music")
    },
    {
      path: "/bio",
      name: "Bio",
      component: () => import("../views/baldwin-bio")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/baldwin-contact")
    },
    {
      path: "/news",
      name: "News",
      component: () => import("../views/baldwin-news")
    },
    {
      path: "/store",
      name: "Store",
      component: () => import("../views/baldwin-store")
    },
    {
      path: "/writing",
      name: "Writing",
      component: () => import("../views/baldwin-writing")
    }
  ]
});
