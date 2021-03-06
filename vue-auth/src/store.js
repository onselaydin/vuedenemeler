import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import { router } from "./router";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        token : "",
        fbApiKey : "AIzaSyAsKQgrRBYK5yNom081iYFRhTE71MQRyRs"
    },

    //senkron metodlar için mutation kullanılır.
    mutations : {
        setToken(state,token){
            state.token = token;
        },
        clearToken(state){
            state.token = "";
            localStorage.removeItem("token");
        }
    },

    //askenkron metodlar için action kullanılır.
    actions : {
        //sayfa yenilendiğinde token tutması için. App.vue her zaman aktif olduğundan
        //bu metodu app.vue de çalıştıracağız.
        initAuth({commit, dispatch}){
            let token = localStorage.getItem("token");
            if(token){
                commit("setToken",token);
                router.push("/");
            }else{
                  router.push("/auth");
            }
        },
        //login(vuexContext){ vuexContext commit,dispatch,state üçünün yer,ne geçer. üçünü çağırmak için vuexContext
        login({commit, dispatch, state}, authData){
            //vuexContext.commit()
            console.log(authData);
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if(authData.isUser){
                authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
            //return promise dönsün diye yaptım. Auth.vue de onSubmit then ile router ile yönlendirdik.
            return axios.post(
            authLink + "Burayafirebasekeyigecelek",
            { email : authData.email, password : authData.password, returnSecureToken : true }
            ).then(response => {
                console.log(response)
                commit("setToken",response.data.idToken)
                localStorage.setItem("token",response.data.idToken);
            })
        },
        logout({ commit, dispatch, state }){
            commit("clearToken");
        }

    },
    getters : {
        isAuthenticated(state){
            return state.token !== ""
        }
    }

});