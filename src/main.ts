import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
