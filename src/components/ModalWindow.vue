<template>
  <div class="modal" id="myModal2"></div>
  ;
</template>
<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { Modal } from "bootstrap";
import modal

function eventListener() {
  const myModal = document.getElementById("myModal");
  const myInput = document.getElementById("myInput");
  const modal = new Modal.getOrCreateInstance("#myModal2")
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}
</script>
<style lang=""></style>
