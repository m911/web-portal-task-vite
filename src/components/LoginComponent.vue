<template>
  <div class="container">
    <div class="container">
      <!-- <form method="post" :on-submit="login"> -->
      <input required type="text" v-model="username" />
      <input required type="password" v-model="password" />
      <!-- <button class="btn btn-primary" type="submit">Login</button> -->
      <button class="btn btn-primary" @click="login">Login</button>
      <!-- </form> -->
    </div>
    <div v-if="isAuthenticated">
      <button class="btn btn-primary" @click="getData">Load Data</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { useDataStore } from "@/stores/data";

export default defineComponent({
  name: "PostList",
  data: () => {
    return {
      isAuthenticated: false,
      dataNumber: 0,
      username: "365",
      password: "1",
      data: [] as object[],
      modalActive: true,
    };
  },
  methods: {
    login(): void {
      const credentials: object = {
        username: this.username,
        password: this.password,
      };
      authService.login(credentials);
      this.isAuthenticated = authService.isAuthenticated;
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

<style lang="scss"></style>
