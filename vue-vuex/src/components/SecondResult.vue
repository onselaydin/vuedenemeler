<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>
    <input type="text" v-model="value">
    <p> {{ value }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

  export default {
    //props : ["counter"],
    //mapGetters ile store.js de tanımladığımız metodları tanımlıyoruz.
    //Computed içinde extra bir mehod tanımlamamıza gerek yok.
    computed : {
      //...spread operator : birden fazla metod için üç noktalı şekilde mapGetters kullandık.
      ...mapGetters({
        double : 'getDoubleCounter',
        stringC : 'stringCounter'
      }),
      value: {
        get(){
          return this.$store.getters.getValue;
        },
        set(value){
          this.$store.dispatch("setValueData", value);
        }
      }
    }
    // {
    //   counter(){
    //     //return this.$store.state.counter * 2;
    //     return this.$store.getters.getDoubleCounter;
    //   },
    //   stringCounter(){
    //     return this.$store.getters.stringCounter;
    //   }
    // }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
