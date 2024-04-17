<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios';
import { store } from './store';
  export default {
    name: 'App',
    data (){
      return{
        store
      }
    }
   
  }
</script>

<style lang="scss" scoped>

</style>