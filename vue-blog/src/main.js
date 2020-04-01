import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from "axios";

axios.defaults.baseURL = "https://vue-blog-ee04d.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "testdeneme_aut_key";
axios.defaults.headers.get["Accepts"] = "application/json";  //sadece json kabul

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
