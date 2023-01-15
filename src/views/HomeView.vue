<script setup lang="ts">
import TheWelcome from "../components/HelloWorld.vue";
import { useDataStore } from "@/stores/data";
</script>

<template>
  <main>
    <TheWelcome />
    <button
      type="button"
      data-bs-toggle="modal"
      class="btn btn-primary"
      data-bs-target="#exampleModal"
    >
      Vertically centered modal
    </button>
  </main>
</template>
