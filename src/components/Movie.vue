<template>
    <div id="movie">
        <img :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + movieDetail.poster_path" />"
    </div>
</template>

<script>
    export default {
      data() {
        return {
          movieDetail: []
        };
      },
      mounted() {
        this.$http
          .get(
            `https://api.themoviedb.org/3/movie/${
              this.$route.params.id
            }?api_key=a702970c58dc70036d195f326f3f4c77`
          )
          .then(res => {
            console.log(res);
            this.movieDetail = res.data;
          });
      }
    };
</script>

<style>
    #movie {
      margin: 5%;
    }
</style>
