<template>
  <div>
     <app-rate :selectedStar="3"></app-rate>
  </div>
   
</template>

<script>
import Rate from "./components/Rate" 
export default {
  components:{
    appRate : Rate
  }
}
</script>

<style>

</style>
