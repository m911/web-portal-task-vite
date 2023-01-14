<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useDataStore } from "@/stores/data";
const { isAuthenticated } = useDataStore();
</script>

<template>
  <div v-if="isAuthenticated">
    <SearchBar />
    <DataTable />
  </div>
  <div v-else>
    You have not permission to access this page. Please login again.
  </div>
</template>

<style lang="scss" scoped></style>
