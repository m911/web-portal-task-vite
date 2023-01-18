<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { Modal } from "bootstrap";
// const loadingModal = new Modal("LoadingModal");
// loadingModal.show();
</script>

<template>
  <div class="container">
    <button
      type="button"
      data-bs-toggle="modal"
      class="btn btn-primary m-3"
      data-bs-target="#exampleModal"
    >
      Open modal
    </button>
    <div>
      <!-- <Modal id="LoadingModal" /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
