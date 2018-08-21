<template>
    <v-toolbar color="cyan lighten-3">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>Movie App</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">

            <v-btn flat>
                <router-link to="/trending">Trending</router-link>
            </v-btn>

            <v-btn flat>
                <router-link to="/popular">Popular</router-link>
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



