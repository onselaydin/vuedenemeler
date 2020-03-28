import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history'
});

//routelar tetiklenmeden önce yapılacakları burada yapılır
router.beforeEach((to,from,next) => {
  console.log('Global olarak kontrol');
  //Buraya herhangi bir kodlar yazılabilir.
  next();// içine false yapasak bu componente girişi engellerim.
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
