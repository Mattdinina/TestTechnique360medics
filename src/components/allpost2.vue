<template>
  <br />
  <div @click="callPost">Cliquez sur moi pour afficher les posts.</div>
</template>

<script>
export default {
  name: "allPost",
  // your component
  methods: {
    callPost() {
      this.$store.dispatch("fetchAllPosts");
      this.$store.dispatch("fetchAllPictures");
    },
  },
};
</script>
