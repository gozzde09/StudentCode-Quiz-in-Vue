
<script setup>

import Quiz from "./components/Quiz.vue";
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <header class="d-flex flex-column">
    <div class="d-flex flex-column">
      <h1 class="mx-auto"> StudentCode </h1>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
    </div>
  </header>
  <Quiz />
  <NavBar />

  <main>
    <RouterView />

  </main>

  <footer class="d-flex justify-content-evenly">
    <p>Om oss</p>
    <p>Kontakt</p>
    <p>Grupp 9</p>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
