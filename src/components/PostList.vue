<template>
  <div class="container">
    <div class="container">
      <input required type="text" v-model="username" />
      <input required type="password" v-model="password" />
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
    <div v-if="datastore.isAuthenticated">
      <button class="btn btn-primary" @click="getData">Load Data</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
// import ModalData from "@/models/ModalData";
import ModalComponent from "./ModalComponent.vue";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";

export default defineComponent({
  name: "PostList",
  data: () => {
    return {
      datastore.isAuthenticated: false,
      dataNumber: 0,
      username: "365",
      password: "1",
      data: [] as object[],
      modalActive: true,
    };
  },
  setup(props, ctx) {
    const modalActive = ref(true);
    const hasAccessKey: boolean = cookies.isKey(COOKIE_PROPS.ACCESS_TOKEN);
  },
  methods: {
    login(): void {
      const credentials: object = {
        username: this.username,
        password: this.password,
      };
      authService.login(credentials);
      this.datastore.isAuthenticated = authService.datastore.isAuthenticated;
      console.log(authService.datastore.isAuthenticated);
    },
    getData(): void {
      taskService.getTasks().then((data) => {
        this.data = data;
      });
    },
  },
  // components: {
  //   ModalComponent,
  // },
  emits: ["toggleModal"],
});
</script>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/fonts.scss";
</style>
