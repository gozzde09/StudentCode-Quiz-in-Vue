<script setup>
import NavBar from "./components/NavBar.vue"
import FooterPart from "./components/FooterPart.vue"

</script>

<template>
  <!-- <header class="d-flex flex-column">
    <div class="d-flex">
      <img src="./assets/quiz.svg" alt="Logo" style="width:150px" />
      <h1 class="mx-auto"> StudentCode </h1>
      </div>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
  </header> -->
  <header class="d-flex">
    <img src="./assets/quiz.svg" alt="Logo" id="logo" />
    <div class="d-flex flex-column mx-auto justify-content-center">
      <h1 class="mx-auto">StudentCode</h1>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
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
footer {
  font-size: smaller;
}
</style>
