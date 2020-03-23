<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-primary" @click="show = !show">kutuyu Göster / Gizle</button>
        <br><br>
        <transition name="fade">
          <div class="alert alert-success" v-if="show">Bu bir Alert Kutusudur</div>
        </transition>
        <hr>
         <transition name="slide">
          <div class="alert alert-warning" v-if="show">Bu bir Alert Kutusudur</div>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show : false
    }
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter{

}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}
.slide-leave{

}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
