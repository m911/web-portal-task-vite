<script setup lang="ts">
import TheWelcome from "../components/HelloWorld.vue";
import LoadingSpinner from "@/components/LoadingSpinner";
</script>

<template>
  <main>
    <LoadingSpinner />
    <button
      type="button"
      data-bs-toggle="modal"
      class="btn btn-primary m-3"
      data-bs-target="#exampleModal"
    >
      Open modal
    </button>
    <TheWelcome />
  </main>
</template>
