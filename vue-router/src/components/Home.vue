<template>
  <div class="container">
    <h3>Home Component</h3>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae  <a href='#' @click="goingHome">soluta.</a>
    </p>
  </div>
</template>
<script>
  export default {
    methods:{
      goingHome(){
        this.$router.push({name:'kullanici'});
      }
    },
    //sayfa renderlanmadan önce
    beforeRouteEnter(to,from,next){
      console.log("Component seviyesinde kontrol...")
      //Buraya herhangi bir kodlar yazılabilir.
      next(); // içine false yapasak bu componente girişi engellerim.
    },
    //sayfadan çıkılınca
    beforeRouteLeave(to,from,next){
      if(confirm("Çıkmak istediğinden Eminmisin"))
      {
        next(); //false yaparsak çıkamayız
      }else{
        next(false); 
      }
      
    }

  }
</script>
