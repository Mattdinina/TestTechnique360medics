<template>
  <nav>
    <font-awesome-icon
      size="lg"
      :class="{ active: !isHomepage }"
      :icon="['fas', 'circle-chevron-left']"
      @click="back()"
    />
    <router-link to="/"><img src="@/assets/logo.png" /></router-link>
    <font-awesome-icon
      class="close"
      size="lg"
      :icon="['fas', 'circle-xmark']"
    />
  </nav>
  <router-view />
</template>

<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const currentRoute = useRoute();

    const isHomepage = ref(currentRoute.path === "/");

    watch(
      () => currentRoute.path,
      (newPath) => {
        isHomepage.value = newPath === "/";
      }
    );

    return {
      back() {
        isHomepage.value ? null : router.back();
      },
      isHomepage,
    };
  },
};
</script>

<style lang="scss">
@import url("@/assets/reset.scss");

#app {
  height: 100vh;
}

nav {
  height: 4rem;
  padding: 0 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  box-shadow: 0px 1px 1px 1px #060d2c33;
  border-radius: 0 0 1rem 1rem;
  position: sticky;
  top: 0;

  img {
    height: 3rem;
  }

  svg {
    color: #e4e6e8;

    &.active {
      color: #58a4b0;
    }

    &.close {
      color: #daa49a;
    }
  }
}

.container {
  height: 100vh;
}
</style>
