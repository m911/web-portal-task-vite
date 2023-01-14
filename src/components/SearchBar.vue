<script setup lang="ts">
import { ref, computed } from "vue";

import { useDataStore } from "@/stores/data";
let { localData, filteredData } = useDataStore();
let query2 = ref("");
const filterData = (event: any): void => {
  const query: string = event.target.value;
  if (query.length == 0) {
    filteredData = [];
    return;
  } else {
    filteredData = localData.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
    });
  }
  console.table(filterData);
};
const filterData2 = (input) => {
  console.log(input.target.value);
};
</script>

<template>
  <div>
    <input
      :oninput="filterData"
      type="text"
      name="search"
      id="searchField"
      placeholder="Type something to search"
      v-model="query2"
    />
  </div>
</template>

<style lang="scss" scoped></style>
