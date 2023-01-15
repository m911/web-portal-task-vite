<script setup lang="ts">
import { useRouter } from "vue-router";
import LoadingScreen from "@/components/LoadingComponent";
import { useDataStore } from "@/stores/data";
import { RouterView } from "vue-router";
import { onBeforeMount, computed } from "vue";
import { taskService } from "@/services/taskService";
import { useLink } from "vue-router";

const router = useRouter();
const routerView = new RouterView();
function dataRedirect() {
  router.replace("/data");
}

// onBeforeMount(() => {
//   useDataStore.isLoading = true;
//   setTimeout(() => taskService.getTasks(), 10000);
//   useDataStore.isLoading = false;
// });
</script>

<template>
  <LoadingScreen :v-show="useDataStore.isLoading == true" />
  <div>
    <h3>Login successful. Go to data page</h3>
    <button class="btn btn-primary" @click="dataRedirect">Load Data</button>
  </div>
</template>

<style lang="scss" scoped></style>
