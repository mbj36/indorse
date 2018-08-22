<template>
    <!-- Writing header using Vuetify framework -->
    <v-toolbar dense color="deep-purple darken-4">
        <v-toolbar-side-icon color="white"></v-toolbar-side-icon>

        <v-toolbar-title>
            <router-link to="/" class="white--text">Movie App</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-text-field solo v-model="search" class="search" @keypress.enter="searchQuery" label="Search Movie by title and press enter"></v-text-field>
            <v-btn flat>
                <router-link class="white--text" to="/">Home</router-link>
            </v-btn>
            <v-btn flat>
                <router-link class="white--text" to="/people/popular">People</router-link>
            </v-btn>
            <v-btn flat>
                <router-link active-class="active" class="white--text" to="/movies/trending"> Trending </router-link>
            </v-btn>
            <v-btn flat>
                <router-link active-class="active" class="white--text" to="/movies/popular">Popular</router-link>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
      data() {
        return {
          search: '',
          searchResults: []
        };
      },
      methods: {
        searchQuery() {
          this.$router.push(`/search?q=${this.search}`);
          this.search = '';
        }
      }
    };
</script>


<style>
    a {
      text-decoration: none;
      color: inherit;
    }
    .search {
      width: 400px;
    }
</style>



