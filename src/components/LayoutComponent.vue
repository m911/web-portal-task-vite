<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
  </header>
</template>

<style lang="scss" scoped></style>
