<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>
        <button class="btn btn-primary" @click="saveUser">Kaydet</button>
         <button class="btn btn-success" @click="getUsers">Verileri Getir</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList">        
              <span>{{ user.data.userName }}</span>
              <button class="btn bnt-xl btn-danger" @click="deleteUser(user.key)">Sil</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName:null,
      userList : []
    }
  },
  methods:{
    saveUser(){
      console.log(this.userName);
      //normalde postdan sonra çift tırnak arasına rest api url sini yazacaktık ama main.js dosyasına global tanım yaptığımız için boş bırakıyoruz.
      //parametreleri bu iki tırnak arasına yazabiliriz.
      // this.$http.post("users.json",{
      //   userName: this.userName})
      //   .then((response)=>{
      //   console.log(response);
      // })
      //resource kullanımına diğer bir örnek
      this.$resource("users.json").save({},{userName : this.userName})
      .then((response)=>{
        console.log(response);
      })
    },
    getUsers(){
      this.userList=[];
      this.$http.get("users.json")
      .then((response)=>{
        return response.json();
      })
      .then(data =>  {
        //response.body de yazabilirsin
        //console.log(response.data);
        //this.userList=[];
        //let data=response.data;
        for(let key in data.userList){
          //this.userList.push(data[key]);
          this.userList.push({
            key : key,
            data : data.userList[key]
          });
        }
      })
    },
    deleteUser(userKey){
      this.$http.delete("users/" + userKey + ".json")
      .then(response => {
        console.log(response);
        this.getUsers();
      })
    }
  }
}
</script>

<style>
</style>
