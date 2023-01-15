<template>
  <!-- <div v-if="useDataStore.isLoading"><LoadingComponent /></div> -->
  <keep-alive>
    <tbody class="table-row" v-for="task in localData" :key="task.task">
      <tr>
        <td>{{ tasknumber++ }}</td>
        <td>{{ task.task }}</td>
        <td>{{ task.title }}</td>
        <td>{{ task.description }}</td>
        <ColoredCell :task="task" />
      </tr>
    </tbody>
  </keep-alive>
</template>
<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import ColoredCell from "./ColoredCell.vue";
import { onBeforeMount, onUnmounted } from "vue";
import { taskService } from "@/services/taskService";
import LoadingComponent from "./LoadingComponent.vue";
// import Itask from "@/utils/ITask";
// taskService.getTasks();

let tasknumber = 0;
let dataStore = useDataStore();
let tabledata = dataStore.showFiler;
const localData = dataStore.localData;

onBeforeMount(() => {
  (async () => {
    await taskService.getTasks();
    let tabledata = dataStore.showFiler;
  })();
  console.log("before mounting ...");
});
onUnmounted(() => {
  console.log("unmounting ...");
});
</script>

<style lang="sass"></style>
