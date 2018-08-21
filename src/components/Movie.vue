<template>
    <div>
        <p>{{$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
      mounted() {
        this.$http
          .get(
            `https://api.themoviedb.org/3/movie/${
              this.$route.params.id
            }?api_key=a702970c58dc70036d195f326f3f4c77`
          )
          .then(res => {
            console.log(res);
          });
      }
    };
</script>
