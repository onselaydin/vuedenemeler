import Vue from "vue";

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }

    Vue.http.put("https://urun-islemleri-7fd48.firebaseio.com/trade-result.json", tradeData)
    .then(response => {
        // console.log(response);
        // console.log(state.purchase);
        // console.log(state.sale);
        // console.log(state.balance);
    })

    
}

export const getTradeResult = ({commit}) => {

    Vue.http.get("https://urun-islemleri-7fd48.firebaseio.com/trade-result.json")
    .then(response => {
        console.log(response);
        commit("updateTradeResult",response.body);//mutation daki updateTradeResult çağırıyoruz.
    })
}