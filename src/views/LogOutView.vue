<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const dataStore = useDataStore();
dataStore.isAuthenticated = false;

onMounted(() => {
  setTimeout(() => {
    const router = useRouter();
    router.push("/");
  }, 5000);
});
</script>

<template>
  <div>
    <h2>You have successfully logout. Redirecting to home page ...</h2>
  </div>
</template>

<style lang="scss" scoped></style>
