<template>
  <div
    class="container"
    v-if="!datastore.isAuthenticated"
    v-bind:="datastore.isAuthenticated"
  >
    <input required type="text" v-model="datastore.loginCredentials.username" />
    <input
      required
      type="password"
      v-model="datastore.loginCredentials.password"
    />
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
  <div v-else-if="!useDataStore().isLoading">
    <h3>Successfully logged in. Go to data page</h3>
    <button
      class="btn btn-primary"
      :disabled="datastore.isLoading"
      @click="dataRedirect"
    >
      Load Data
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { authService } from "@/services/authService";
import { taskService } from "@/services/taskService";
import { useDataStore } from "@/stores/data";

let datastore = useDataStore();
const router = useRouter();

function login(): void {
  (async () => {
    if (await authService.login()) {
      useDataStore().isLoading = true;
      await taskService.getTasks();
      useDataStore().isLoading = false;
    } else {
      alert("Login failed. Please check username and password and try again.");
    }
  })();
}
function dataRedirect() {
  router.replace("/data");
}
</script>
<style lang="scss"></style>
