<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p> Ad: {{$route.query.name}}</p>
     <p> Soyad: {{$route.query.lastName}}</p>
     <div style="height:800px"></div>
     <p id="data"> Burada benim gelecek olan bazı bilgilerim olabilir.</p>
  </div>

</template>
<script>
  export default {}
</script>
