<template>
    <div class="container">
        <h1>Malesef Bilemediniz!!!</h1>
        <button @click="newGame">Yeni Oyun</button>
    </div>
</template>
<script>
export default {
    methods: {
        newGame(){
            this.$emit("activeComponentEvent","app-game-cards")
        }
    }
}
</script>
<style scoped>
    .container{
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: darkred;
    }
    .container h1{
        text-align: center;
        font-size: 333%;
        color:white;
    }
    .container button{
        cursor: pointer;
        width: 200px;
        background-color: #fff;
        color: darkred;
        border: 1px solid;
        height: 50px;
        font-size: 15px;
        border-radius: 5px;
        outline: none;
        font-weight: bold;
        transition:  all .5s;
    }

    /* Buttona tıklandığına oluşacak */
    .container button:hover{
        background-color: lightgreen;
        color:#fff;
        transition:  all .5s;
    }
</style>