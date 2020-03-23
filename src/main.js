import Vue from 'vue'
import App from './App.vue'
import Home from "./Home"
import User from "./component_iletisim/User"

export const eventBus = new Vue({
  methods : {
    changeAge(age){
      this.$emit("ageWasEdited",age)
    }
  }
});

Vue.directive("color", {
  bind(el,binding,vnode){
    if(binding.arg == "background"){
      el.style.backgroundColor=binding.value
    }else{
      el.style.color = binding.value;
    }
    
  }
})

Vue.component("lamp-component",Home)
Vue.component("user-component",User)

new Vue({
  el: '#app',
  render: h => h(App)
})
