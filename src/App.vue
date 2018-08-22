<template>
    <v-app>
        <Header/>
        <div id="app">
            <!-- for navigating between screens -->
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
    import Header from './components/Header';

    export default {
      name: 'app',
      components: {
        Header //registering the components
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
