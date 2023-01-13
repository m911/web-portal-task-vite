<template>
  <div class="login">
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Title</th>
          <th>Description</th>
          <th>Color Code</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row" v-for="task in tasks" :key="task.task">
          <td>{{ tasknumber++ }}</td>
          <td>{{ task.task }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td class="task" style="{{background-color:#1df70e}}">
            <!-- <td class="task" style="{{background-color:`${task.colorCode}`}}"> -->
            {{ task.colorCode }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";

let tasknumber = 0;
const dataStore = useDataStore();
const data = taskService.getTasks();
dataStore.setUserData(data)<void>;
const tasks = useDataStore().localData;
</script>

<style lang="sass"></style>
