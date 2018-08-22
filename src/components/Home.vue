<template>
    <div>
        <span class="type">
            <h3>Popular Movies -
                <router-link to="/movies/popular">View All</router-link>
            </h3>
            <popular :count="4"></popular>
        </span>
        <span class="type">
            <h3>Top Rated Movies -
                <router-link to="/movies/top_rated">View All</router-link>
            </h3>
            <top-rated :count="4"></top-rated>
        </span>
        <span class="type">
            <h3>Trending Movies -
                <router-link to="/movies/trending">View All</router-link>
            </h3>
            <trending :count="4"></trending>
        </span>
    </div>
</template>

<script>
    import Popular from '../components/Popular';
    import TopRated from '../components/TopRated';
    import Trending from '../components/Trending';
    export default {
      components: {
        // Registering the components
        Popular,
        TopRated,
        Trending
      }
    };
</script>

<style>
    .type {
      text-align: center;
      position: relative;
      padding: 20px;
      margin: 1%;
    }
</style>
