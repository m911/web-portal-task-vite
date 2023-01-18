import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
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
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
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
