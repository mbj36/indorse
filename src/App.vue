<template>
    <div id="app">
        <landing/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Landing from './components/Landing';

    export default {
      name: 'app',
      components: {
        Landing
      }
    };
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
</style>
