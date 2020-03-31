import Vue from "vue";
import { router } from "../../router";

const state = {
    products : []
}

const getters = {
    //ürünlerimizi veren metod
    getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}
//bunlar senkron çalışır.
const mutations = {
    updateProductList(state,product){
        state.products.push(product);
    }
}

//asenkron çalışır.
const actions = {
    initApp({ commit }){
        //Vue Resource işlemleri put,get,push,delete
        Vue.http.get("https://urun-islemleri-7fd48.firebaseio.com/products.json")
        .then(response => {
            console.log(response);
            let data = response.body;
            for(let key in data){
                data[key].key = key;
                commit("updateProductList", data[key]);
            }
        })
    },
    saveProduct({ dispatch, commit, state }, product){
        //console.log(product);
        Vue.http.post("https://urun-islemleri-7fd48.firebaseio.com/products.json", product)
        .then((response) => {
            product.key = response.data.name;
            commit("updateProductList", product);
            //console.log(state.products);
            //bu tradeResult actionda setTradeResult da parametre olarak gönderdik.
            let tradeResult = {
                purchase : product.price,
                sale : 0,
                count : product.count
            }
            dispatch("setTradeResult",tradeResult)
            
            //eskisinin yerini al. Ana sayfaya yönlendir.
            router.replace("/")
        })
    },
    sellProduct({ state, commit, dispatch }, payload){
        //patch put get push gibi bir metotdur.

        //pass by reference
        //pass by value...
        let product = state.products.filter(element => {
            return element.key == payload.key;
        })
        if(product){
            let totalCount = product[0].count - payload.count;
            Vue.http.patch("https://urun-islemleri-7fd48.firebaseio.com/products/"+payload.key+".json", { count : totalCount })
            .then(response => {
                console.log(response);
                product[0].count = totalCount;
                let tradeResult = {
                    purchase: 0,
                    sale: product[0].price,
                    count: payload.count
                }
                dispatch("setTradeResult",tradeResult)
                router.replace("/")
            })
        }
        
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}