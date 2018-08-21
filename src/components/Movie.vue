<template>
    <div id="movie">
        <v-layout row wrap>
            <v-flex sm4>
                <img :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + movieDetail.poster_path" />
            </v-flex>
            <v-flex sm8>
                <div class="details">
                    <span class="movie_title">{{movieDetail.original_title}}</span> <br/>

                    <span class="movie_overview">{{movieDetail.overview}}</span> <br/>
                    <span class="genre" v-for="genre in movieDetail.genres" :key="genre.id">
                        <v-chip> {{genre.name}} </v-chip>
                    </span> <br/>
                    <span class="release_year"> Release Year <br/> {{extractYear(movieDetail.release_date)}}
                    </span> <br/>
                    <span class="tagline">{{movieDetail.tagline}}</span> <br/>
                    <span class="runtime"> Runtime <br/> {{movieDetail.runtime}}</span>
                </div>
            </v-flex>
        </v-layout>
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
      },
      methods: {
        extractYear(date) {
          return date.split('-')[0];
        }
      }
    };
</script>

<style>
    #movie {
      margin: 5%;
    }
    .details {
      margin: 0% 0% 0% 10%;
    }
    .movie_title {
      font-size: 40px;
    }
    .movie_overview {
      font-size: 20px;
    }
    .release_year {
      margin-top: 2%;
      font-size: 30px;
      position: absolute;
    }
    .tagline {
      position: absolute;
      margin-top: 8%;
      font-size: 25px;
    }
    .runtime {
      margin-top: 10%;
      position: absolute;
      font-size: 30px;
    }
</style>
