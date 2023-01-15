<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableBody from "@/components/TableBody.vue";
import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
let { datastore, localData } = useDataStore();

async function getData() {
  await taskService.getTasks();
  console.table(localData);
}
const showAuth = () => {
  console.log(datastore.isAuthenticated);
  console.table(localData);
};
</script>

<template>
  {{ datastore.isAuthenticated }}
  <button :onclick="getData">Get data</button>
  <button :onclick="showAuth">Show authorization</button>
  <div
    v-if="datastore.isAuthenticated"
    v-bind="datastore.isAuthenticated"
    class="container"
  >
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
