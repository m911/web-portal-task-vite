<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableBody from "@/components/TableBody.vue";
import { useDataStore } from "@/stores/data";
const { isAuthenticated } = useDataStore();
</script>

<template>
  <div v-if="isAuthenticated" v-bind="isAuthenticated" class="container">
    <SearchBar />
    <table class="table table-bordered border-primary">
      <TableHeader />
      <TableBody />
    </table>
  </div>
  <div v-else>
    You have not permission to access this page. Please login again.
  </div>
</template>

<style lang="scss" scoped></style>
