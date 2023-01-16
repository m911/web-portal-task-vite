<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableBody from "@/components/TableBody.vue";
import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
import { RouterLink } from "vue-router";

let datastore = useDataStore();
const changeArray = () => {
  let newArray = datastore.localData.slice(0, 1);
  datastore.localData = newArray;
};
</script>

<template>
  <div
    v-if="datastore.isAuthenticated"
    v-bind="datastore.isAuthenticated"
    class="container"
  >
    <button :onclick="taskService.getTasks">Load data</button>
    <SearchBar />
    <table class="table table-bordered border-primary">
      <TableHeader />
      <TableBody />
    </table>
  </div>
  <div v-else>
    You have not permission to access this page. Please login again.
    <a class="router-link-exact-active"
      ><RouterLink to="/login">Login</RouterLink></a
    >
  </div>
</template>

<style lang="scss" scoped></style>
