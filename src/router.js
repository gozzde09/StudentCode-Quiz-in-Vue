import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import StartQuiz from './pages/StartQuiz.vue'
import QuizPage from "./pages/QuizPage.vue"
import HtmlPage from './pages/HtmlPage.vue'
import JavascriptPage from './pages/JavascriptPage.vue'
import PhpPage from './pages/PhpPage.vue'
import MyResults from './pages/MyResults.vue'
// import Prov from './pages/Prov.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: "/",
    },
    {
      component: QuizPage,
      path: "/QuizPage",
    },
    {
      component: StartQuiz,
      path: "/StartQuiz",
    },
    {
      component: HtmlPage,
      name: "Html-quiz",
      path: "/HtmlPage",
    },
    {
      component: PhpPage,
      name: "Php-quiz",
      path: "/PhpPage",
    },
    {
      component: JavascriptPage,
      name: "JS-quiz",
      path: "/JavascriptPage",
    },
    {
      component: MyResults,
      name: "Mina Resultat",
      path: "/MyResults",
    },
    // {
    //   component: Prov,
    //   name: "Prov",
    //   path: "/Prov/:id",
    // },
  ],
});
