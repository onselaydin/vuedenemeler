import Home from "./components/Home";
//import User from "./components/user/User"; lazy load için kapattım.
import UserEdit from "./components/user/UserEdit"


//Büyük uygulamalarda routeları aşağıdaki gibi lazy load yapmalıyız.
const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"));
    })
}

export const routes = [
    { path : '', component : Home, name: 'anasayfa' },
    { path : '/user/:id', component : User, name: 'kullanici', beforeEnter:(to,from,next)=>{
        console.log(' route seviyesinde kontrol..') 
        //Buraya herhangi bir kodlar yazılabilir.
        next();// içine false yapasak bu componente girişi engellerim.
    } },
    { path : '/userEdit',component : UserEdit,name: 'userEdit'},
    { path : '*', redirect : "/" }
];