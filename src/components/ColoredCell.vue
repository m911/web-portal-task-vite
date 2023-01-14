<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({ color: String });
console.log(props.color);
const style = {
  "background-color": `${props.color}`,
};
</script>

<template>
  <td :style="style"></td>
</template>

<style lang="scss" scoped></style>
