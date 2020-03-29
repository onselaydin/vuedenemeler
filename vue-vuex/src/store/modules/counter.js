const state = {
    counter: 0
}
const getters = {
    getDoubleCounter(state){
        return state.counter * 2;
    },
    stringCounter(state){
        return state.counter + ".kez tıklandı.";
    }
}

const mutations = {
    increaseCounter(state){
        state.counter ++;
    },
    decreaseCounter(state){
        state.counter --;
    }
}

const actions = {
    //Bu action ve mutationlar parametrede alabilir.
    increment({commit},payload){
        //db ye bağlantı yavaşlığı simüle ediyorum.
        setTimeout(()=>{
            commit("increaseCounter");
        },payload.time)
        
    },
    decrement({commit}){

        commit("decreaseCounter");
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}