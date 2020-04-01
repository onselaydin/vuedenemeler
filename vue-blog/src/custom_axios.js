import axios from "axios";

const instance = axios.create({
    baseURL : "https://vue-blog-ee04d.firebaseio.com"
})
//instance.defaults.headers["Authorization"] = "blabla_aut_key";

export default instance;

// Bunun gibi bir dosya ile birden fazla endpointe bağlanabiliriz.
// Bu dosyadaki ayarları kullanmak için import customAxios from "../custom_axios" ekle
// ve customAxios.get
// customAxios.post gibi kullanabilirsin...