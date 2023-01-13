<template>
  <div class="container">
    <div class="container">
      <input required type="text" v-model="username" />
      <input required type="password" v-model="password" />
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
    <div v-if="isAuthenticated">
      <!-- <button class="btn btn-primary" @click="getData">Load Data</button> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();
const isAuthenticated: boolean = dataStore.isAuthenticated;
const router = useRouter();
// let username: string;
// let password: string;
let username = "365";
let password = "1";

function login(): void {
  const credentials: object = {
    username: username,
    password: password,
  };
  authService.login(credentials)
    ? router.replace("/data")
    : alert(
        "User not authenticated. Please check username and password and try again."
      );
}
// const getData = (): void => {
// };
</script>
<style lang="scss"></style>
