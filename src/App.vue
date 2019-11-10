<template>
<div>
  <appBasvuruFormu></appBasvuruFormu>
</div>
<!-- <div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">

      <button @click="selectedComponent = 'appMemory'" class="btn-sm btn btn-primary">NewMemory getir</button>
      <button @click="selectedComponent = 'appAuthor'" class="btn-sm btn btn-primary">Memory getir</button>
      <button @click="selectedComponent = 'appNewMemory'" class="btn-sm btn btn-primary">Author getir</button>
      <hr>
      <p>{{ selectedComponent }}</p>
      <hr>
      <keep-alive>
        <component :is="selectedComponent">
          <h1 slot="heading">10 Kasım</h1>
          <p slot="content">Atatürkü anıyoruz...</p>
        </component>
      </keep-alive>
      
       <app-memory>
        <h1 slot="heading">10 Kasım</h1>
        <p slot="content">Atatürkü anıyoruz...</p>
      </app-memory>
    </div>
  </div>
</div> -->
 
</template>

<script>

import Memory from "./gelismis/Memory"
import NewMemory from "./gelismis/NewMemory"
import Author from "./gelismis/Author"
import BasvuruFormu from "./formlar/BasvuruFormu"

  export default {
    data: function() {
      return {
        status: "Pasif",
        selectedComponent : "appMemory"
      }
    },
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,
      appAuthor : Author,
      appBasvuruFormu : BasvuruFormu
    }
  }
</script>

<style>

</style>
