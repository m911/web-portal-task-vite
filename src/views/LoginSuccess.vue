<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function dataRedirect() {
  router.replace("/data");
}
</script>

<template>
  <div>
    <h3>Login successful. Go to data page</h3>
    <button class="btn btn-primary" @click="dataRedirect">Load Data</button>
  </div>
</template>

<style lang="scss" scoped></style>
