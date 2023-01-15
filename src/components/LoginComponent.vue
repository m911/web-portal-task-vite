<template>
  <div class="container" v-if="!isAuthenticated" v-bind:="isAuthenticated">
    <input required type="text" v-model="username" />
    <input required type="password" v-model="password" />
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
  <div v-else>
    <h3>You are already logged in. Go to data page</h3>
    <button class="btn btn-primary" @click="dataRedirect">Load Data</button>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
import { useDataStore } from "@/stores/data";

let { isAuthenticated } = useDataStore();
const router = useRouter();
// let username: string;
// let password: string;
let username = "365";
let password = "1";

// onBeforeMount(() => {
//   isAuthenticated ? (isAuthenticated = false) : isAuthenticated;
// });

function login(): void {
  const credentials: object = {
    username: username,
    password: password,
  };
  (async () => {
    (await authService.login(credentials)) && (await taskService.getTasks())
      ? router.replace("/data")
      : alert(
          "Authentication failed. Please check username and password and try again."
        );
  })();
}
const dataRedirect = () => {
  router.replace("/data");
};
</script>
<style lang="scss"></style>
