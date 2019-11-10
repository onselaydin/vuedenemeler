<template>
    <div class="wcol-md-6">
        <h3>Child Component 1</h3>
        <p>Ben user.vue isimli parent komponentin bir child componentiyim</p>
        <p> Kullanıcı Adı: {{ name }}</p>
        <p> Kullanıcı Adı: {{ swtichName() }}</p>
        <p> Kullanıcı Yaşo : {{ age }}</p>
        <button @click="sendToParent">Veriyi Parent'e gönder </button>
    </div>
</template>
<script>
    import { eventBus } from "../main";

    export default {
        props : {
            name : {
                type : String,
                default : "onsel.net"
            },
            age : String
        },
        methods : {
            swtichName(){
                return this.name.split("").reverse().join("");
            },
            sendToParent(){
                this.$emit("data", "Onsel AYDIN");
            }
    },
    created(){
        eventBus.$on("ageWasEdited", (age) => {
            this.age = age;
        })
    }
}
</script>