<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableBody from "@/components/TableBody.vue";
import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
let { isAuthenticated } = useDataStore();

const getData = () => {
  taskService.getTasks();
  console.table(useDataStore().localData);
};
</script>

<template>
  <button :on-click="getData">Get data</button>
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
