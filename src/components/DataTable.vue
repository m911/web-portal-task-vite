<template>
  <div v-if="isAuthenticated" v-bind="isAuthenticated" class="container">
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
        <tr class="table-row" v-for="task in localData" :key="task.task">
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
  <div v-else>You have not permission to access this page</div>
</template>
<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { taskService } from "@/services/taskService";
import { watch } from "vue";

let tasknumber = 0;
const { setUserData, isAuthenticated, localData } = useDataStore();
const data = taskService.getTasks();
setUserData(data)<void>;
</script>

<style lang="sass"></style>
