<template>
    <div class="tag-container">
        <!-- :tagColor="color" color props dan geliyor -->
        <Tag 
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
        :index="index"
        :tagColor="color"
        @removeOneTagEvent="removeOneTag($event)"/>
        <input 
            type="text" 
            @keydown.enter="addTag"
            @keydown.backspace="removeTag"
            maxlength="10" />
    <div class="error" v-if="error">Zaten var!!!</div>
  </div>
</template>

<script>
import Tag from "./Tag"
export default {
components:{
        Tag
    },
 data(){
    return{
      tags : ["Önsel","Yagmur"],
      error : false
      
    }
  },
  methods:{

    addTag(event){
      let text = event.target;
      let matchedTag = false;

      if(text.value.length > 0){
      
        this.tags.forEach(tag => {
          if(tag.toLowerCase() === text.value.toLowerCase()){
            matchedTag = true;
          }
        })

      if(!matchedTag){
        // tags arrayinne textbox dan veri ekledik
        this.tags.push(text.value);
        text.value = '';
      }else{
        this.error = true;
        setTimeout(() => {
          this.error = false
        }, 2000)
      }
      }
    },
    removeTag(e){
      if(e.target.value.length <= 0){
           //splice ile arraydeki son elemanı siliyoruz.
        this.tags.splice(this.tags.length - 1, 1)
      }
     
    },
    removeOneTag(index){
      this.tags.splice(index, 1)
    }
  },
  //attribut dan aldığımız değeri ilk burada karşılıyoruz.
  props:{
      value : {
          required : false //herhangi bir veri gelmeyedebilir.
      },
      color : {
          type : String,
          required : false, //Bu attribe değer vermek gerekmez
          default : "success" // Kullanıcıdan değer gelmezse geçerli değer..
      }
  },
  created(){
      if(this.value){
          if(this.value.length > 0){
              //dışardan virgülle gelen veriyi ayırıp arraya ver.
              this.tags = this.value.split(",")
          }
      }
  },
  //watch data üzerinde bir değişim olduğunda bunu yakalamamıza yarar.
  watch : {
      tags(){
          //tags içindeki elemanları virgüllü string olarak ver.
        this.$emit("input",this.tags.join(","))
      }
  }
}
</script>

<style scoped>
  .tag-container{
    border:1px solid #ccc;
    padding:20px;
  }
  
  input{
    outline: none;
    height: 30px;
    width: 100px;
    border-radius: 5px;
  }

  .error{
    font-size: 12px;
    color:red;
    margin-top: 5px;
  }
</style>