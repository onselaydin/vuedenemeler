<template>

    <div class="rate">
        <input type="radio" v-model="star" name="rate" value="5"/>
        <label for="star5" title="text" @click="changeStar">5</label> 
        <input type="radio" v-model="star" name="rate" value="4"/>
        <label for="star4" title="text" @click="changeStar">4</label>                             
        <input type="radio" v-model="star" name="rate" value="3"/>
        <label for="star3" title="text" @click="changeStar">3</label>
        <input type="radio" v-model="star" name="rate" value="2"/>
        <label for="star2" title="text" @click="changeStar">2</label>
        <input type="radio" v-model="star" name="rate" value="1"/>
        <label for="star1" title="text" @click="changeStar">1</label>
    </div>

</template>

<script>
export default {
    props : ["selectedStar"],

    data(){
        return{
           star: this.selectedStar
        }
    },
    created(){
        
         
        
    },
    methods:{
        changeStar(e)
        {
            this.star = e.target.innerText;
        }
    }
}
</script>

<style scoped>
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>