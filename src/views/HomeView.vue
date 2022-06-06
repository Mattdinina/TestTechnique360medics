<template>
  <div>
    <AllPost></AllPost>
    <ul>
      <li v-for="i in $store.state.posts" :key="i.id">
        <a v-bind:href="'/#/article/' + i.id">
          titre : {{ i.title }} <br />
          <img v-bind:src="$store.state.pictures[i.id - 1].thumbnailUrl" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import AllPost from "@/components/allpost2.vue";

export default {
  name: "HomeView",
  components: { AllPost },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
</style>
