<template>
    <v-app>
        <Header/>
        <div id="app">
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
    import Header from './components/Header';

    export default {
      name: 'app',
      components: {
        Header
      }
    };
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }
</style>
