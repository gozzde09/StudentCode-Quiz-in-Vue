<template>
  <nav class="row d-flex navbar  navbar-light">
    <div class="d-flex  flex-wrap  mx-auto">
        <ul class=" d-flex flex-wrap mx-auto ">
          <li class="nav-item">
            <router-link
              to="/About"
              class="nav-link"
              >About Us</router-link
            >
            <p>
              Read about our team!
              <!-- We at StudentCode are dedicated to offering engaging and
              entertaining quiz for students, which takes you on a journey
              through the world of code. Discover our assortment of quizzes to
              deepen your knowledge and have fun at the same time! -->
            </p>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link"> Contact </router-link>
            <p>
              quiz@studentcode.com <br />
              +46 324 854 93
            </p>
            <a href="quiz@studentcode.com" />
            <a href="tel:+46 324 854 93" />
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
            <a href="https://github.com/aliciaosv/StudentCode" class="link">Länk till projektet</a>
          </li>
        </ul>
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
  .link{
    color:#5fb4f6;
   color:#28a745;
  }
  li{
    list-style:none
  }


</style>
