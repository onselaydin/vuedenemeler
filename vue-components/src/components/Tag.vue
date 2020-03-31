<template>
    <span class="tag" :class="selectedTheme">
        <span class="content">{{tag}}</span>
        <!-- removeOneTagEvent isimli event'i tags.vue ye gönder. Başka sayfadaki clicki tetikliyoruz -->
        <span class="close" @click="$emit('removeOneTagEvent',index)">x</span>
    </span>
    
</template>

<script>
export default {
    props : ["tag", "index", "tagColor"],
    data(){
        return {
            selectedTheme : null
        }
    },
    created(){
        this.selectedTheme = this.tagColor
    }
}
</script>

<style scoped>
.primary{
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.success{
    color: #155724;
    background-color: #D5EDDB;
    border : 1px solid #c3e6cb;
}
.secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #b8daff;
}
.info{
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
}
.danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
.tag{
    padding: 10px;
    cursor: default;
    margin-right: 5px;
    border-radius: 10px;
  }
  .tag * {
      font-size: 14px;
  }
  .tag .close{
    font-size: 12px;
    cursor: pointer;
  }
</style>