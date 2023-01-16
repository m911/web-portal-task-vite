<template>
  <!-- <div v-if="useDataStore.isLoading"><LoadingComponent /></div> -->
  <keep-alive>
    <tbody
      class="table-row"
      v-for="task in dataStore.localData"
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
  </keep-alive>
</template>
<script setup lang="ts" async>
import { useDataStore } from "@/stores/data";
import ColoredCell from "./ColoredCell.vue";
import { onBeforeMount, computed } from "vue";
import { taskService } from "@/services/taskService";
import LoadingComponent from "./LoadingComponent.jsx";
import { useRouter } from "vue-router";

const router = useRouter();
const dataStore = useDataStore();

onBeforeMount(() => {
  (async () => {
    useDataStore.isLoading = true;
    await taskService.getTasks();
    useDataStore.isLoading = false;
    await router.isReady();
  })();
});

let tasknumber = 0;
</script>

<style lang="sass"></style>
