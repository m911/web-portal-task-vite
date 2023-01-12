<template lang="ts">
<div></div>;
</template>
<script>
export default {
  data: function () {
    return {};
  },
  methods: function () {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  },
};
</script>
<style lang=""></style>
