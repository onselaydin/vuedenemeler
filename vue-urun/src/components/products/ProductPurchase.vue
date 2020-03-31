<template>
    <div class="container">
        <div class="loading" :style="isLoading">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün İşlemleri</h3>
                <hr>
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <input v-model="product.title" type="text" class="form-control" placeholder="Ürün adını giriniz..">
                </div>
                <div class="form-group">
                    <label>Adet</label>
                    <input v-model="product.count" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <div class="form-group">
                    <label>Fiyat</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
                </div>
                <div class="form-group">
                    <label>Açıklama</label>
                    <textarea v-model="product.description" cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                              class="form-control"></textarea>
                </div>
                <hr>
                <button class="btn btn-primary" :disabled="saveEnabled" @click="saveProduct">Kaydet</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//import ProductModel from "../../models/ProductModel"
export default {
    data(){
        return {
            //product: { ProductModel }
            product : {
                title : "",
                count : null,
                price : null,
                description : ""
            },
            saveButtonClicked : false //buttona basıldığını anlanak için ekledik.
        }
    },
    methods : {
        saveProduct(){
            this.saveButtonClicked = true;
            this.$store.dispatch("saveProduct", this.product)
        }
    },
    //render işlemi bittikten sonraki life cycle metodudur.
    computed : {
        saveEnabled(){
            // return false;
            // console.log(this.product.title);
            if(this.product.title.length > 0 && this.product.count > 0 &&
             this.product.price > 0 && this.product.description.length > 0)
            {
                return false;
            }else{
                return true;
            }
        },
        isLoading(){
            if(this.saveButtonClicked){
                return {
                    display : "block"
                }
            }
            else {
                return {
                    display : "none"
                }
                
            }
        }
    },
    //formda alanlar doluyken başka sayfaya geçildiğinde uyarmasını sağlıyoruz.
    beforeRouteLeave(to, from, next){

         if((this.product.title.length > 0 || this.product.count > 0 ||
             this.product.price > 0 || this.product.description.length > 0) && 
             !this.saveButtonClicked)
             {
                 if(confirm("Kaydedilmemiş veriler var. Çıkılsınmı?")){
                     next(true); //çıkılmasın
                 }else{
                     next(false);//çıkılsın
                 }
                 
             }
            else {
                next();
            }
    }
}
</script>

<style scoped>

</style>