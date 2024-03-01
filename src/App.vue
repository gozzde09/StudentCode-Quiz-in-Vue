<script setup>
import NavBar from "./components/NavBar.vue"
import FooterPart from "./components/FooterPart.vue"
// FONT
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";

</script>

<template>
  <header class="d-flex">
    <div class="d-flex flex-column justify-content-center align-items-center mx-auto ">
      <router-link to="/" style="text-decoration:none;">
        <h1 class="my-2 justify-content-center" style="color:#28a745;text-decoration:none;">StudentCode</h1>
      </router-link>
      <h3 class="mx-auto" style="color:#204764; font-style:italic">Don't cheat - Repeat!</h3>
    </div>
  </header>
  <NavBar />

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterPart />
  </footer>
</template>

<style scoped>
h1 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

h3,
h1 {
  margin: 0 auto
}
[v-cloak] {
  display: none;
}
</style>
