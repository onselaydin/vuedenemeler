<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
     <p>USer ID : {{ id }}</p> <!--router ile gelen parametreyi gösterecek -->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <router-link tag="button" class="btn btn-primary" :to="{name:'userEdit',query : {name:'Önsel',lastName:'Aydın'}}">User edit</router-link>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Go Home</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        //homedan gelen parametreyi almak için kullanıyoruz.
        id : this.$route.params.id
      }
    },
    methods:{
      navigateToHome(){
        //alert('test');
        //3. tane route yönteni var
        //this.$router.push("/");
        //this.$router.push({path : '/'});
        this.$router.push({ name: 'anasayfa'});
      }
    }
  }
</script>
