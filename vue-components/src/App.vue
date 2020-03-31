<template>
 <div class="container">
   <app-tags v-model="tags" color="danger"/>
 </div>

</template>

<script>
import Tags from "./components/Tags";
export default {
 
  components:{
    appTags : Tags
  },
  data(){
    return {
      tags : "Önsel, Yağmur"
    }
  }
}
</script>

<style>
  body{
    font-family: sans-serif;
  }
  

</style>
