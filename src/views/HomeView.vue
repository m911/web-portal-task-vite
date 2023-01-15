<script setup lang="ts">
import TheWelcome from "../components/HelloWorld.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <ModalWindow />
    <button
      type="button"
      data-bs-toggle="modal"
      class="btn btn-primary"
      data-bs-target="#exampleModal"
    >
      HTML based modal
    </button>
  </main>
</template>
