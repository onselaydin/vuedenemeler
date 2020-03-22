var vm1= new Vue({
  el: "#app1",
  data:{
    title:"VueJs Instance",
    showParagraph:false
  },
  methods: {
    show: funtion() {
      this.showParagraph = true;
      this.updateTitle("VueJs Ins günellendi");
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
      lovercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
  match:{
     title: function(value){
       alert("Title değişti,yeni değer : " + value);
     }
   }
})
setTimeout(function{
       vm1.title="Time tarafondan değiştirildi :)"    
 },2000)

var vm2 = new Vue({
  el:"#app2",
  data:{
    title:"Vue instance 2"
  },
  methods: {
    changeTitle:function(){
      vm1.title="inst2 tarafından değiştirildi."
    }
  }
})