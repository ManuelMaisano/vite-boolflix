import {reactive}  from 'vue';

export const store = reactive({
    apiUrl:' https://api.themoviedb.org/3/',
    endPoint:{
        movie: 'search/movie',
        series: 'search/tv',
    },
    options:{
        params: {
            api_key:'124c077917119b0d63e149d0a3b8c377',
            query: 'a',

        },
    },
    movies:[],
    series:[],
    imgUrl: 'https://image.tmdb.org/t/p/w342',
});