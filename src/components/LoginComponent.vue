<template>
  <div class="container">
    <div class="container">
      <!-- <form method="post" :on-submit="login"> -->
      <input required type="text" v-model="credentials.username" />
      <input required type="password" v-model="credentials.password" />
      <!-- <button class="btn btn-primary" type="submit">Login</button> -->
      <button class="btn btn-primary" @click="login">Login</button>
      <!-- </form> -->
    </div>
    <div v-if="isAuthenticated">
      <button class="btn btn-primary" @click="getData">Load Data</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
import { cookies, COOKIE_PROPS } from "@/services/cookieService";
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();
const credentials = dataStore.getAccessToken.credentials;
const login = () => {
  authService.login(credentials);
};

async function getData() {
  taskService.getTasks().then((response) => {});
}
</script>

<style lang="scss"></style>
