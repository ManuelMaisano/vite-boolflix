<template>
  <div>
    <HeaderComponent />
    <MainComponent />
 
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
        .then((res) => {
          this.store.movies = res.data.results;
          console.log(res.data.results);
        });

    },
    getSeries() {
      axios.get(this.store.apiUrl + this.store.endPoint.series, this.store.options)
        .then((res) => {
          this.store.series = res.data.results;
          console.log(res.data.results);
        });

    },
  },
  created() {
    this.getMovies();
    this.getSeries();
  },
};
</script>

<style lang="scss" scoped>





</style>
