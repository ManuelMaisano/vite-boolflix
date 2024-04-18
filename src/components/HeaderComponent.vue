<template>
    <div id="header">
        <div class="d-flex align-items-center">
            <img class="img-fluid" src="/public/images/netflix.jpg" alt="LogoNetflix">
            <ul class="d-flex">
                <li><a href="">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Nuovi e popolari</a></li>
                <li><a href="#">La mia lista</a></li>
                <li><a href="#">Sfoglia per lingua</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {

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
</style>