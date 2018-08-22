<template>
    <div>
        <h2 class="title">Popular People</h2>
        <span class="spinner" v-if="isLoading">
            <v-progress-circular indeterminate color="purple"></v-progress-circular>
        </span>
        <div id="trending">
            <span v-for="(people, index) in popular" v-show="index < (count ? count: popular.length) " :key="people.id">
                <router-link :to="{ name: 'people', params: { id: people.id }}">

                    <img class="trending_image" height="300px" width="350px" :src="'https://image.tmdb.org/t/p/w400_and_h600_bestv2/' + people.profile_path" />
                    <div>
                        <span class="title">{{people.name}}</span>
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
          popular: [],
          isLoading: true
        };
      },
      props: {
        count: {
          type: Number
        }
      },
      mounted() {
        this.$http
          .get(
            'https://api.themoviedb.org/3/person/popular?api_key=a702970c58dc70036d195f326f3f4c77'
          )
          .then(res => {
            this.popular = res.data.results;
            this.isLoading = false;
          });
      }
    };
</script>

<style>
    #trending {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin: 1%;
    }
    .trending_image {
      transform: scale(1);
      padding: 10px;
    }
    .trending_image:hover {
      transform: scale(0.97) translateZ(0);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .title {
      text-align: center;
      position: relative;
      padding: 20px;
      margin: 1%;
    }
</style>
