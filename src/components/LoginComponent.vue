<template>
  <div class="container">
    <div class="container" v-if="!dataStore.isAuthenticated">
      <!-- <form method="post" :on-submit="login"> -->
      <input required type="text" v-model="credentials.username" />
      <input required type="password" v-model="credentials.password" />
      <!-- <button class="btn btn-primary" type="submit">Login</button> -->
      <button class="btn btn-primary" @click="authService.login(credentials)">
        Login
      </button>
      <!-- </form> -->
    </div>
    <div v-if="dataStore.isAuthenticated">
      <!-- <button class="btn btn-primary" @to="LoginSuccess">Load Data</button> -->
      <router-link class="btn btn-primary" to="/data">Go to data</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { authService } from "@/services/authService";
import { useDataStore } from "@/stores/data";
import { dataRedirect } from "@//router/routerActions";
import { useRouter } from "vue-router";
import LoginSuccess from "@/components/LoginComponent.vue";

const dataStore = useDataStore();
const credentials = dataStore.getAccessToken.credentials;

// useRouter().
</script>

<style lang="scss"></style>
