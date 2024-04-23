<template>
    <div id="header">
        <div class="d-flex align-items-center">
            <img class="img-fluid" src="/public/images/netflix.png" alt="LogoNetflix">
            <ul class="d-flex">
                <li><a href="">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Nuovi e popolari</a></li>
                <li><a href="#">La mia lista</a></li>
                <li><a href="#">Sfoglia per lingua</a></li>
            </ul>
            <form class="form-inline d-flex ">
                <input class="form-control mr-sm-2" type="search" placeholder="film,serietv.." aria-label="Search" >
                <button class="btn">Search</button>
            </form>
        </div>

    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    emits:['searchtitle'],
    data() {
        return {
            store

        }
    }

}
</script>

<style lang="scss" scoped>
#header {
    height: 150px;
    background-color: #010101;
    

}

img {
    height: 150px;
    width: 150px;

}

li {
    list-style: none;
    padding: 20px;
    font-size: 20px;
}


a {
    text-decoration: none;

    color: white;
    font-weight: bold;

    &:hover {
        color: lightgray;
    }
}
button{
background-color: red;
color: white;
align-items: center;
}
</style>