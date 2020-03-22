new Vue({
    el: '#app',
    //data da propetilerim olacak
    data: {
        player_heal : 100,
        monster_heal : 100,
        game_is_on : false, //oyunun başlayıp başlamadığı
        logs:[]
    },
    methods:{
        start_game : function() {
           
            this.game_is_on = true;
        },
        attach :function() {
            var point = Math.ceil(Math.random() * 10); //virgülsüz random bir rakam elde ettik.
            console.log(point);
            this.monster_heal-=point;
            this.add_to_log({ turn : "p", text : "OYUNCU ATAĞI (" + point + ")"})
            this.monster_attack();
            console.log(this.monster_heal);
            console.log(this.player_heal);
        },
        special_attach : function() {
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal-=point;
            this.add_to_log({ turn : "p", text: "ÖZEL OYUNCU ATAĞI (" + point + ")"})
            this.monster_attack();
           
        },
        //iyileşmek
        heal_up : function() {
            var point = Math.ceil(Math.random() * 20); 
            this.player_heal+=point;
            this.add_to_log({ turn : "p", text: "İLK YARIM ("+point+")"})
            this.monster_attack();
            
        },
        //pes etmel
        give_up: ()=>{
            this.player_heal=0;
            this.add_to_log({ turn : "p", text: "OYUNCU PES ETTİ"})
        },
        monster_attack : function(){
            var point = Math.ceil(Math.random() * 15);
            this.player_heal-=point;
            this.add_to_log({ turn : "m", text: "CANAVAR ATAĞI (" + point + ")"})
        },
        add_to_log : function(log){
            this.logs.push(log);
        }
    },
    //watch değişken değeri değişince aksiyon almamozo sağlar
    watch :{
        player_heal : function(value){
            if(value<=0){
                this.player_heal = 0;
                if(confirm('Oyunu Kaybettin. Tekrar oynarmısın?')){
                    this.player_heal=100;
                    this.monster_heal=100;
                    this.logs=[];
                }
            }else if(value>=100){
                this.player_heal = 100;
            }

        },
        monster_heal : function(value){
            if(value<=0){
                this.monster_heal = 0;
                if(confirm('Oyunu Kazantın**. Tekrar oynarmısın?')){
                    this.player_heal=100;
                    this.monster_heal=100;
                    this.logs=[];
                }
            }
        }
    }

})