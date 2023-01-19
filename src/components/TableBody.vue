<template>
  <!-- <div v-if="useDataStore.isLoading"><LoadingComponent /></div> -->
  <keep-alive>
    <tbody
      class="table-body"
      v-for="task in dataStore.showFilter"
      :key="task.task"
    >
      <tr class="table-row">
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
const dataStore = useDataStore();
</script>

<style lang="sass"></style>
