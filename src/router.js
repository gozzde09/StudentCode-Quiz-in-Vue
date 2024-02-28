import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import StartQuiz from './pages/StartQuiz.vue'
import QuizPage from './pages/QuizPage.vue'
import MyResults from './pages/MyResults.vue'
import GetQuiz from './components/GetQuiz.vue'
import AboutPage from './pages/AboutPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: QuizPage,
      path: '/QuizPage'
    },
    {
      component: AboutPage,
      path: '/about'
    },
    {
      component: StartQuiz,
      path: '/StartQuiz'
    },
    // {
    //   component: GetQuiz,
    //   path: '/GetQuiz'
    // },
    {
      component: MyResults,
      path: '/MyResults'
    },
    {
      component: GetQuiz,
       path: '/:category/:level/:amount'
      // path: '/category/:category/level/:difficulty/amount/:amount'
    }
  ]
})
