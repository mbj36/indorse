<template>
    <div id="movie">
        <span class="spinner" v-if="isLoading">
            <v-progress-circular indeterminate color="purple"></v-progress-circular>
        </span>
        <v-layout row wrap v-else>
            <v-flex sm4>
                <img :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + peopleDetail.profile_path" />
            </v-flex>
            <v-flex sm8>
                <div class="details">
                    <span class="people_name">{{peopleDetail.name}} </span> <br/>
                    <span class="movie_overview">{{peopleDetail.biography}}</span> <br/>
                    <span v-for="name in peopleDetail.also_known_as" :key="name.id">
                        <v-chip>{{name}}</v-chip>
                    </span> <br/>
                    <span class="birth">Place of Birth - {{peopleDetail.place_of_birth}}</span>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          peopleDetail: [],
          isLoading: true
        };
      },
      mounted() {
        this.$http
          .get(
            `https://api.themoviedb.org/3/person/${
              this.$route.params.id
            }?api_key=a702970c58dc70036d195f326f3f4c77`
          )
          .then(res => {
            this.peopleDetail = res.data;
            this.isLoading = false;
          });
      }
    };
</script>

<style>
    #movie {
      margin: 5%;
    }
    .spinner {
      margin: 50%;
    }
    .details {
      margin: 0% 0% 0% 10%;
    }
    .people_name {
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
    .birth {
      margin-top: 1%;
      position: absolute;
      font-size: 30px;
    }
    .v-progress-circular {
      margin: 1rem;
    }
</style>
