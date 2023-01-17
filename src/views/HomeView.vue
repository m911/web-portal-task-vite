<script setup lang="ts">
import TheWelcome from "../components/HelloWorld.vue";
import { onBeforeMount, onBeforeUpdate, onUpdated } from "vue";
import { refreshLocalData } from "@/utils/refreshLocalData";
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();

// onBeforeMount(() => {
//   refreshLocalData(2000);
//   console.log(dataStore.isAuthenticated);
// });

// onUpdated(() => {
//   refreshLocalData(2000);
//   console.log("component did update?");
// });
</script>

<template>
  <main>
    <TheWelcome />
    <button
      type="button"
      data-bs-toggle="modal"
      class="btn btn-primary"
      data-bs-target="#exampleModal"
    >
      HTML based modal
    </button>
    <p>{{ dataStore.isAuthenticated }}</p>
  </main>
</template>
