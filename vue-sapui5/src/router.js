import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail
        },
        {
            path: "/ornek",
            name: "ornek",
            component: HelloWorld
        }
    ]
});