<template>
    <div class="wcol-md-6">
        <h3>Child Component 2</h3>
        <p>Ben User.vue isimli Chiled bir componentim</p>
        <p>Kullanıcı Yaşı  {{ age }}</p>
        <button @click="changeAge">Yaş Bilgisini değiştir</button>
    </div>
</template>
<script>
import { eventBus } from "../main";

export default {
    props:["age"],
    methods : {
        data : {
            //Buraya tanımladıklarımızı diğer componentlerde import ederek kullanabiliriz.
        },
        changeAge(){
            this.age = 30;
            //eventBus.$emit("ageWasEdited", this.age)
            eventBus.changeAge(this.age);
        }
    }
}
</script>

<style scope>
    div {
        background-color: lightcoral;
        padding: 20px;
        border: 1px solid #666;
        display: inline-block;
      }
</style>