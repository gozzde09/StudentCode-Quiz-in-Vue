
<script setup>


import NavBar from "./components/NavBar.vue"
import FooterPart from "./components/FooterPart.vue"

</script>

<template>
  <header class="d-flex flex-column">
    <div class="d-flex flex-column">
      <h1 class="mx-auto"> StudentCode </h1>
      <h2 class="mx-auto">Don't cheat - Repeat</h2>
    </div>
  </header>
  <NavBar />

  <main>
    <RouterView />
    
  </main>

  <footer> 
    <FooterPart/>
  
</footer>
</template>

<style scoped> 
footer{
font-size: smaller;}
</style>