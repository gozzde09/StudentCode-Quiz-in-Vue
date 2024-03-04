import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import router from "./router";

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app");
