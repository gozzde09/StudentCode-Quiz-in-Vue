
<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xxl">
      <!-- navbarlänkar -->
      <div class="collapse navbar-collapse justify-content-lg-center align-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item" style="max-width: 60%">
            <router-link to="/About" class="nav-link" :class="{ active: $route.path === '/About' }">About Us</router-link>
            <p>
              We at StudentCode are dedicated to offering engaging and
              entertaining quiz for students, which takes you on a journey through
              the world of code. Discover our assortment of quizzes to deepen your
              knowledge and have fun at the same time!
            </p>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"> Contact </router-link>
           <p>quiz@studentcode.com <br> +46 324 854 93</p>
              <a href="quiz@studentcode.com" />
              <a href="tel:+46 324 854 93" />.
          </li>
          <!-- <li class="nav-item d-flex flex-column">
            <router-link to="/QuizPage" class="nav-link" :class="{ active: $route.path === '/QuizPage' }">
              Quizzes</router-link>
            <p class="mx-auto">HTML & CSS</p>
            <p class="mx-auto">JavaScript</p>
            <p class="mx-auto">WordPress</p>
            <p class="mx-auto">PHP</p>
          </li> -->

          <li class="nav-item">
            <router-link to="#" class="nav-link"> Github </router-link>
            <p>https://github.com/</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  height: 40px;
  font-size: larger;
  font-weight: bolder;
}

.nav-item {
  margin: 0 1rem;
}

.active {
  background-color: #ede8e3;
  color: black;
  border-radius: 2px;
  transition: background-color 0.3s ease;
}
</style>
