<template>
  <tbody class="table-row" v-for="task in localData2" :key="task.task">
    <tr>
      <td>{{ tasknumber++ }}</td>
      <td>{{ task.task }}</td>
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <ColoredCell :task="task" />
    </tr>
  </tbody>
</template>
<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import ColoredCell from "./ColoredCell.vue";

let tasknumber = 0;
const { localData, filteredData } = useDataStore();
let localData2 = filteredData.length == 0 ? localData : filteredData;
</script>

<style lang="sass"></style>
