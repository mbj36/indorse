<template>
    <div>
        <h2 class="title">
            All Results -
            <router-link :to="{name: 'search', params: {query: $route.params.query }}">{{$route.params.query}}</router-link>
        </h2>
        <div id="trending">
            <span v-if="isLoading" class="spinner">
                <v-progress-circular indeterminate color="purple"></v-progress-circular>
            </span>
            <span v-if="search.length === 0">
                <h1>No results</h1>
            </span>
            <span v-else v-for="(movie, index) in search" :key="movie.id">
                <router-link :to="{ name: 'movie', params: { id: movie.id }}">

                    <img class="trending_image" height="300px" width="350px" :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + movie.poster_path" />
                    <div>
                        <span class="title">{{movie.original_title}}</span>
                    </div>
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          search: [], // to store the detail of a particular movie
          isLoading: true
        };
      },
      mounted() {
        this.$http
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=a702970c58dc70036d195f326f3f4c77&query=${
              this.$route.params.query
            }`
          )
          .then(res => {
            this.search = res.data.results;
            this.isLoading = false; // Loading indicator
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
