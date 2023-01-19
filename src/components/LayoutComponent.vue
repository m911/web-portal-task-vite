<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
</script>

<template>
  <header>
    <nav>
      <a class="router-link-exact-active">
        <RouterLink class="link" to="/">Home</RouterLink>
      </a>
      <a class="router-link-exact-active" v-if="!dataStore.isAuthenticated">
        <RouterLink to="/login">Login</RouterLink>
      </a>
      <a class="router-link-exact-active" v-if="dataStore.isAuthenticated">
        <RouterLink to="/data">Data</RouterLink>
      </a>
      <a class="router-link-exact-active" v-if="dataStore.isAuthenticated">
        <RouterLink to="/logout">Logout</RouterLink>
      </a>
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

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  margin: 0 2rem 0 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
