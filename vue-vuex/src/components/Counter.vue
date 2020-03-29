<template>
  <div>
    <!-- mutation ile çalışan buttonlar -->
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <!-- actions ile çalışan buttonlar tıklayıp 2 sn bekle. increment metoduna parametre gönderdik.
    actionlar, mutationlar parametrelide çalışabilir. Parametreleri obje olarak gönderebiliriz.-->
    <button class="btn btn-success" @click="increment({time : 2000})">+ ArttırAsync</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters,mapActions } from "vuex";

export default {
  methods : {
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    ...mapActions([
      "increment",
      "decrement"
    ])
    // increment(){
    //   this.$store.dispatch("increment");
    // },
    // decrement(){
    //   this.$store.dispatch("decrement");
    // }
    // incrementCounter(){
    //   //this.$emit("counterEvent", 1);
    //   this.$store.state.counter++;
    //   this.$store.commit("increaseCounter"); //store.js deki mutationdaki methodu commitle.
    // },
    // decrementCounter(){
    //   //this.$emit("counterEvent", -1);
    //   this.$store.state.counter--;
    //   this.$store.commit("decreaseCounter"); //store.js deki mutationdaki methodu commitle.
    // }
  }
}
</script>

<style>
</style>
