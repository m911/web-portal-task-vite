<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { onUnmounted, onDeactivated } from "vue";

onDeactivated(() => {
  dataStore.modalImageURL = "";
});

const dataStore = useDataStore();

const fileChange = (event: object) => {
  let file = event.target.files[0];
  dataStore.modalImageURL = URL.createObjectURL(file);
};
</script>

<template>
  <div class="flex-container">
    <img :src="dataStore.modalImageURL" alt="" />

    <input type="file" @change="fileChange" class="btn btn-primary" />
  </div>
</template>

<style type="sass">
.flex-container {
  display: flex;
  flex-direction: column;
}
</style>
