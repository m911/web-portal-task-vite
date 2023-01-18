<script setup lang="ts">
import { useDataStore } from "@/stores/data";

const dataStore = useDataStore();
dataStore.isAuthenticated = false;

// onMounted(() => {
//   setTimeout(() => {
//     const router = useRouter();
//
//   }, 5000);
// });
</script>

<template>
  <div>
    <h2>You have successfully logout. Redirecting to home page ...</h2>
  </div>
</template>

<style lang="scss" scoped></style>
