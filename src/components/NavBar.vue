<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activePage = ref(route.path)

function thisActivePage(path) {
  activePage.value = path
}
</script>

<template></nav>
  <div class="d-flex justify-content-center">
    <b-nav pills>
      <b-nav-item :class="{ active: activePage === '/' }" @click="thisActivePage('/')">
        <RouterLink to="/" class="nav-text">Home</RouterLink>
      </b-nav-item>

      <!-- Dropdownlänkarna -->
      <b-nav-item-dropdown class="nav-dropdown" text="Quiz" toggle-class="nav-link-custom" right>
        <b-dropdown-item :class="{ active: activePage === '/HtmlPage' }" @click="thisActivePage('/HtmlPage')">
          <RouterLink to="/HtmlPage">HTML</RouterLink>
        </b-dropdown-item>
        <b-dropdown-item :class="{ active: activePage === '/JavascriptPage' }" @click="thisActivePage('/JavascriptPage')"
          class="dropdown-text">
          <RouterLink to="/JavascriptPage">JavaScript</RouterLink>
        </b-dropdown-item>
        <b-dropdown-item :class="{ active: activePage === '/PhpPage' }" @click="thisActivePage('/PhpPage')">
          <RouterLink to="/PhpPage">PHP</RouterLink>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item :class="{ active: activePage === '/MyResults' }" @click="thisActivePage('/MyResults')">
        <RouterLink to="/MyResults" class="nav-text">My Results</RouterLink>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<style scoped>
.nav-text {
  color: black;
  text-decoration: none;
}

.active {
  background-color: #EDE8E3;
  color: black;
  padding: 3px;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}

.nav-dropdown,
.dropdown-text {
  color: black !important;
  text-decoration: none !important;
}
</style>
