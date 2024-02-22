<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const activePage = ref(route.path)

  function thisActivePage(path) {
    activePage.value = path
  }
</script>

<template>
  <div class="d-flex justify-content-center">
    <b-nav pills>
      <b-nav-item
        :class="{ active: activePage === '/' }"
        @click="thisActivePage('/')"
      >
        <RouterLink to="/" class="nav-text">Home</RouterLink>
      </b-nav-item>

      <!-- Dropdownlänkarna  -->
      <b-nav-item-dropdown text="Quiz" toggle-class="nav-link-custom" right>
        <b-dropdown-item
          :class="{ active: activePage === '/HtmlPage' }"
          @click="thisActivePage('/HtmlPage')"
        >
          <RouterLink class="dropdown-text" to="/HtmlPage">HTML</RouterLink>
        </b-dropdown-item>
        <b-dropdown-item
          :class="{ active: activePage === '/JavascriptPage' }"
          @click="thisActivePage('/JavascriptPage')"
        >
          <RouterLink class="dropdown-text" to="/JavascriptPage"
            >JavaScript</RouterLink
          >
        </b-dropdown-item>
        <b-dropdown-item
          :class="{ active: activePage === '/PhpPage' }"
          @click="thisActivePage('/PhpPage')"
        >
          <RouterLink class="dropdown-text" to="/PhpPage">PHP</RouterLink>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item
        :class="{ active: activePage === '/MyResults' }"
        @click="thisActivePage('/MyResults')"
      >
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
    background-color: #ede8e3;
    color: black;
    padding: 3px;
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
  .dropdown-text {
    color: black;
    text-decoration: none;
  }
</style>
