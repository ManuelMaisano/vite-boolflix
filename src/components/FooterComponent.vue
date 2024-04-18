<template>
    <footer>
        <div class=" container">
            <div class="icon">
                <a href=""> <img class="img-fluid" src="/public/images/footer-facebook.png" alt="LogoFacebook"></a>
                <a href=""> <img class="img-fluid" src="/public/images/footer-twitter.png" alt="LogoTwitter"></a>
                <a href=""> <img class="img-fluid" src="/public/images/footer-youtube.png" alt="LogoYoutube"></a>
            </div>

            <div class="d-flex align-items-center ">
                <ul class="">
                    <li><a href="#">Audiodescrizione</a></li>
                    <li><a href="#">Rapporti con gli investitori</a></li>
                    <li><a href="#">NoteLegali</a></li>
                    <li><a href="#">Preferenze per la pubblicita</a></li>
                </ul>
                <ul>
                    <li><a href="#">Audiodescrizione</a></li>
                    <li><a href="#">Rapporti con gli investitori</a></li>
                    <li><a href="#">Note legali</a></li>
                </ul>
                <ul>
                    <li><a href="#">Audiodescrizione</a></li>
                    <li><a href="#">Rapporti con gli investitori</a></li>
                    <li><a href="#">Contattaci</a></li>
                </ul>
            </div>
            <div>
                <button>Codice di servizo</button>
                <br>
                <span>1997-2024 Netflix,Inc.</span>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',


}
</script>
<style lang="scss" scoped>
footer {
    background-color: #080808;
    padding: 80px;
}



li {
    list-style: none;
    color: #808080;

}

a {
    text-decoration: none;
    color: #808080;
    padding: 10px;

}
a:hover{
    color: white;
    text-decoration: underline;
}

img {
    color: white;
}

.icon{
    padding: 25px;
}


button {
    padding: 10px;
    border: 2px solid #808080;
    background-color: #080808;
  
    color: #808080;
    margin: 30px 0px;
}
button:hover{
    color: white;
    
}

span{
    color: #808080;
}
</style>