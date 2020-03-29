import Vue from "vue";
import Vuex from "vuex";
//state deki değerimide ayırabiliyorum.modules klasöründe.En alttaki modules içinede tanımlıyorum.
import counter from "./modules/counter";
//mutations.js bir çok olacağı için * kullandık.
import * as mutations from "./modules/mutations";
import * as getters from "./modules/getters";
import * as actions from "./modules/actions";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state : {
        value : 10
    },
    getters,
    //mutation ile state deki değeri manuple edeceğiz.
    mutations,
    //state in içinde bir veriyi set etmek için kullanıyoruz.
    //özellikle asenkron işler için actions kullanılır. örneğin db ye bağlanmak.
    actions,

    modules:{
        counter
    }

});
