<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const style = {
  "background-color": `${props.task.colorCode}`,
};
</script>

<template>
  <td :style="style">{{ task.colorCode }}</td>
</template>

<style lang="scss" scoped></style>
