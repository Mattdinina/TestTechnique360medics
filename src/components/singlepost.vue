<template>
  <br />

  <router-link to="/">Page d'accueil</router-link>

  <br />
  <h1>Titre : {{ $store.state.currentPost.title }}</h1>
  <p>Description : {{ $store.state.currentPost.body }}</p>
  <p>userId : {{ $store.state.currentPost.userId }}</p>
  <!-- <div>``{{ $store.state.currentPost }}``</div> -->
</template>

<script>
// import { useRoute } from "vue-router";

// console.log($route.params. id)

export default {
  name: "singlePost",

  beforeMount() {
    this.$store.dispatch("fetchOnePost", this.$route.params.id);
  },
};
</script>
