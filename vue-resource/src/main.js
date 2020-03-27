import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
// import { MdList,MdDivider } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

 Vue.use(VueResource);
// Vue.use(MdList);
// Vue.use(MdDivider);

Vue.http.options.root = "https://vuejs-vue-resource-49ac5.firebaseio.com";

Vue.http.interceptors.push((request,next) => {
  next(response => {
    response.json = () => {
      return {
        userList : response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
