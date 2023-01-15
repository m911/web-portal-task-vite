<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { ref } from "vue";

let dataStore = useDataStore();
const filterData = (event: any): void => {
  const query: string = event.target.value;
  if (query.length == 0) {
    dataStore.filteredData = [];
    return;
  } else {
    let newarray: object[] = dataStore.localData.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
    });
    dataStore.filteredData = newarray;
    console.clear();
    console.table(newarray);
    console.table(dataStore.filteredData);
  }
};
</script>

<template>
  <div>
    <input
      :oninput="filterData"
      autocomplete="off"
      type="text"
      name="search"
      id="searchField"
      placeholder="Type something to search"
      v-model="dataStore.query"
    />
  </div>
</template>

<style lang="scss" scoped></style>
