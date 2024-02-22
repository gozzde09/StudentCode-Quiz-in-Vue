<script setup>
import NavBar from "./components/NavBar.vue"
import FooterPart from "./components/FooterPart.vue"

</script>

<template>
  <header class="d-flex">
    <div class="d-flex logo"> <img src="./assets/quiz.svg" alt="logo" id="logo" /> </div>
    <div class="d-flex flex-column justify-content-center align-items-center mx-auto ">
      <h1 class="justify-content-center" style="color:#28a745;">StudentCode</h1>
      <h2 class="mx-auto" style="color:#204764;">Don't cheat - Repeat</h2>
    </div>
    <div class="logo" style="width:150px; color:white">.</div>
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
#logo {
  width: 150px;
  height: 100px;
}

.logo {
  margin: 2rem 0 0 1rem;
}

footer {
  font-size: smaller;
}
</style>
