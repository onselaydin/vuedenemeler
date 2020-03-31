import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/products";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : { 
        purchase : 0.0, //satın alınan adet
        sale : 0.0, // satış tutarı
        balance : 0.0 //toplam tutar
    },
    getters,
    mutations,
    actions,
    modules : {
        product
    }
});