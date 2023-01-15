import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DataView from "../views/DataView.vue";
import LoginSuccess from "@/views/LoginSuccess.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
      component: LoginView,
    },
    {
      path: "/data",
      name: "data",
      component: DataView,
    },
    {
      path: "/loginSucess",
      name: "loginSucess",
      component: LoginSuccess,
    },
  ],
});

export default router;
