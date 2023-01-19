<script setup lang="ts">
import { useDataStore } from "@/stores/data";

let dataStore = useDataStore();
const filterData = (event: any): void => {
  const query: string = event.target.value;
  if (query.length == 0) {
    dataStore.filteredData = [];
    return;
  } else {
    dataStore.filteredData = dataStore.localData.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
    });
  }
};
</script>

<template>
  <div class="row height d-flex justify-content-center align-items-center">
    <input
      :oninput="filterData"
      autocomplete="off"
      type="text"
      name="search"
      id="searchField"
      class="form-control"
      placeholder="Type something to search"
      v-model="dataStore.query"
    />
  </div>
  <!-- <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Type something to search"
            v-model="dataStore.query"
          />
          <button :on-click="filterData" class="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped></style>
