<template>
  <div class="game-area">
      <p> {{ answer }} </p>
      <!-- <p>{{ selectedCard}}</p> -->
    <h1 class="title">
      Poğaça
      <span>nerede</span>
      <strong></strong>
    </h1>
    <h4 class="description">Açık kartlardan birini seçtikten sonra, kapalı olan karta tıklayınız.</h4>
    <div class="container">
        <!-- Kendi componentimize click yaptırmak için @click.native yapmalıyız.
        Normal html taglarında @click yeterlidir. 
        :class da seçilen kart hangisiyse gölge onda kalıyor -->
        <transition-group name="rotate-all" appear class="card-container">
            <app-card 
                :key="card.id"
                :class="{'shadow' : selectedCard == card.id }"
                @click.native="selectedCard = card.id"
                v-for="card in cards" 
                :card="card">
            </app-card>
        </transition-group> 
    </div>
    <div class="container">
        <!-- mode out-in birinci component animasyonu bitince devreye git anlamında -->
        <transition name="rotate" mode="out-in">
            <component 
                @click.native="showCard(answer)" 
                :card="answer"
                v-bind:is="activeCard">
            </component>
        </transition>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";

export default {
    components:{
        appCard: Card,
        appDefaultCard: DefaultCard
    },
    data(){
        return{
            selectedCard : null,
            answer : {},
            activeCard : "app-default-card",
            cards : [
                { id : 1, component : "app-card", image : "/src/assets/card-1.jpg" },
                { id : 2, component : "app-card", image : "/src/assets/card-2.jpg" },
                { id : 3, component : "app-card", image : "/src/assets/card-3.jpg" },
                { id : 4, component : "app-card", image : "/src/assets/card-4.jpg" },
                { id : 5, component : "app-card", image : "/src/assets/card-5.jpg" }

            ]
        }
    },
    //sayfada bişey renderlandığında bu lifecycle hook çalışır.
    created(){
        //1-5 arasında bir rastgele sayı üret.
        let answer = Math.ceil(Math.random() * this.cards.length);
        this.answer = this.cards[answer - 1];
    },
    methods : {
        showCard(answer){
            if(this.selectedCard == null){
                alert('Bir kart seçiniz..')
            }else{
                this.activeCard = answer.component;

                setTimeout(() => {
                    
                    if(answer.id == this.selectedCard){
                    //alert("Doğru")
                    this.$emit("activeComponentEvent","app-celebrate")
                }else{
                    //alert("Yanlış")
                    this.$emit("activeComponentEvent","app-failure")
                }

                },1000)

                
            }
        }
    }
};
</script>
<style scoped>
/* container içindeki kartların yan yana olması için */
.container, .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.title{
    text-align: center;
    color: rosybrown;
}
.title span {
    color:mediumpurple;
}
.title strong {
    color:darkred;
}
.description {
    color :gray;
    text-align: center;
}
.card {
    width: 200px;
    height: 232px;
    border-radius: 5px;
    border: 1px solid #666;
    /*background-color: purple; */
    transition: box-shadow .5s;
    margin-left: 15px;
}
.card:hover{
    box-shadow: 0px 5px 48px #666;
    transition: box-shadow .5s;;
}
.card img{
    width: 100%;
    height: 100%;
}
.shadow{
    box-shadow: 0px 5px 48px #30969f!important;
    transition: box-shadow .5s;
}

/*** Açık kartların animasyonu için gerekli css tanımları */

.rotate-all-enter {

}
.rotate-all-enter-active{
    animation : rotate-all ease-in-out 2s forwards;
}
.rotate-all-leave{
    /** arayüzden bir component yok edilirse(detach) burası çalışır */
}
.rotate-all-leave-active{
    /** */
}
@keyframes rotate-all {
    from{
        transform: rotateY(0);
    }
    to{
        transform: rotateY(1080deg);
    }
}
/**Kapalı kartın animasyonları */
.rotate-enter{}
.rotate-enter-active{
    animation: rotate-in .5s is ease-in-out forwards;
}
.rotate-leave{}
.rotate-leave-active{
    animation: rotate-out .5s is ease-in-out forwards;
}

@keyframes rotate-in {
    from{
        transform: rotateY(90deg);
    }
    to{
        transform: rotateY(0deg);
    }
}
@keyframes rotate-out {
    from{
        transform: rotateY(0deg);
    }
    to{
        transform: rotateY(90deg);
    }
}
</style>