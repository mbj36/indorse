<template>
    <v-toolbar dense color="cyan lighten-3">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>
            <router-link to="/">Movie App</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
                <router-link to="/">Home</router-link>
            </v-btn>
            <v-btn flat>
                <router-link to="/people/popular">People</router-link>
            </v-btn>
            <v-btn flat>
                <router-link active-class="active" to="/movies/trending"> Trending </router-link>
            </v-btn>
            <v-btn flat>
                <router-link active-class="active" to="/movies/popular">Popular</router-link>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>


<style>
    a {
      text-decoration: none;
      color: inherit;
    }
</style>



