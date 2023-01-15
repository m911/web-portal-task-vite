<script setup lang="ts">
import { onDeactivated } from "vue";
import { RouterLink, RouterView } from "vue-router";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useDataStore } from "@/stores/data";
import ModalComponent from "./components/ModalComponent.vue";

onDeactivated((): void => {
  sessionStorage.setItem("localData", JSON.stringify(useDataStore().localData));
});
</script>

<template>
  <ModalComponent />
  <LayoutComponent />
  <RouterView />
</template>
