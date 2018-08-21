<template>
    <div id="trending">
        <span v-for="movie in popular" :key="movie.id">
            <router-link :to="{ name: 'movie', params: { id: movie.id }}">
                <img class="trending_image" height="300px" width="350px" :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + movie.poster_path" />
            </router-link>
        </span>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          popular: [],
          posterPath: ''
        };
      },
      mounted() {
        this.$http
          .get(
            'https://api.themoviedb.org/3/trending/movies/week?api_key=a702970c58dc70036d195f326f3f4c77'
          )
          .then(res => {
            this.popular = res.data.results;
            console.log(res);
          });
      }
    };
</script>

<style>
    #trending {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 10px;
    }
    .trending_image {
      transform: scale(1);
      padding: 10px;
    }
    .trending_image:hover {
      transform: scale(0.97) translateZ(0);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
</style>
