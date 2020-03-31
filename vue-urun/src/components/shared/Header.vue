<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link active-class="active" to="/urun-listesi" tag="a" class="nav-item">
            <a class="navbar-brand">Ürün Listesi</a>
        </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item">
                <a class="nav-link" href="#">Ürün İşlemleri</a>
            </li> -->
            <router-link  active-class="active" to="/urun-islemleri" tag="li" class="nav-item">
                <a class="nav-link">Ürün İşlemleri</a>
            </router-link>
             <router-link active-class="active" to="/urun-cikisi" tag="li" class="nav-item">
                <a class="nav-link">Ürün Çıkış</a>
            </router-link>
        </ul>
    </div>
</nav>
</template>