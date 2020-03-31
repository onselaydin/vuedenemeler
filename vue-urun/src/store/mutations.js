export const updateTradeResult = (state, payload) => {
    if(payload.count){
        //para miktarlarını floata çevir. adetleri inte çevir
        state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
        state.sale += parseFloat(payload.sale) * parseInt(payload.count);
    }else{
        //para miktarlarını floata çevir. adetleri inte çevir
        state.purchase += parseFloat(payload.purchase);
        state.sale += parseFloat(payload.sale);
    }
    
    state.balance += parseFloat(state.sale) - parseFloat(state.purchase);
}