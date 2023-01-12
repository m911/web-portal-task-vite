<template lang="ts">
<div class="login" >
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
      <tr class="table-row" v-for="task in tasks" :key="task.id">
        <td>{{tasknumber+1}}</td>
        <td>{{task.task}}</td>
        <td>{{task.title}}</td>
        <td>{{task.description}}</td>
        <td>{{task.colorCode}}</td>
      </tr>
          </tbody>
      </table>
    </div>;
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DataTable",
  data() {
    return {
      tableData: [],
    };
  },
});
</script>
<style lang="ts">
.login
</style>
