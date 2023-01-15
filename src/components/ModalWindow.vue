<template lang="ts">
<div>{{ content }}</div>;
</template>
<script setup>
import { useDataStore } from "@/stores/data";
function eventListener() {
  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}
</script>
<style lang=""></style>
