<script setup lang="ts">
import { useDataStore } from "@/stores/data";

let { query } = useDataStore();
const filterData = (event: any): void => {
  const query: string = event.target.value;
  if (query.length == 0) {
    dataStore.filteredData = [];
    return;
  } else {
    let newarray: object[] = localData.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
    });
    filteredData = newarray;
  }
  //   console.clear();
  //   console.table(filteredData);
  console.table(useDataStore().filteredData);
};
const showdata = () => {
  // filteredData = [{ dfd: 1, dfsdfdfd: 2, dfdf: 3 }];
  console.log(query);
};
</script>

<template>
  <div>
    <input
      :oninput="showdata"
      type="text"
      name="search"
      id="searchField"
      placeholder="Type something to search"
      v-model="query"
    />
    {{ query }}
  </div>
</template>

<style lang="scss" scoped></style>
