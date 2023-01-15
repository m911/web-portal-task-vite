<template>
  <tbody
    class="table-row"
    v-for="task in dataStore.showFilter"
    :key="task.task"
  >
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
import { onBeforeMount } from "vue";
import { taskService } from "@/services/taskService";
// import Itask from "@/utils/ITask";

let tasknumber = 0;
let dataStore = useDataStore();
let localData2 =
  dataStore.filteredData.length == 0
    ? dataStore.localData
    : dataStore.filteredData;

onBeforeMount(() => {
  taskService.getTasks();
});
</script>

<style lang="sass"></style>
