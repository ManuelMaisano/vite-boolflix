<template>
    <main >
        <div class="container" >
            <CardList/>
           

        </div>
    </main>
</template>

<script>
import CardList from './MainComponent/CardList.vue'
export default {
    name: 'MainComponent',
    components :{
        CardList,
    },
    data() {
        return {

        }
    }

}
        
    
</script>

<style lang="scss" scoped>
main{
    background-color:#080808 ;

    
    
}

</style>