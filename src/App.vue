<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useDataStore } from "@/stores/data";
import ModalComponent from "./components/ModalComponent.vue";
// import ModalWindow from "./components/ModalWindow.vue";

onMounted((): void => {
  sessionStorage.setItem("localData", JSON.stringify(useDataStore().localData));
});
</script>

<template>
  <!-- <ModalWindow /> -->
  <ModalComponent />
  <LayoutComponent />
  <RouterView />
</template>
