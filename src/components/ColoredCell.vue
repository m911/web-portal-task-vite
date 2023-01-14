<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({ color: String });
console.log(props.color);
let color = props.color;
const style = {
  "background-color": `${color}`,
};
</script>

<template>
  <td :style="style">{{ children }}</td>
</template>

<style lang="scss" scoped></style>
