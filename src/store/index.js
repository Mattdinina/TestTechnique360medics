import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: "",
    pictures: "",
    currentPost: "",
    currentPicture: "",
  },
  getters: {},

  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setCurrentPost(state, payload) {
      state.currentPost = payload;
    },
    setPictures(state, payload) {
      state.pictures = payload;
    },
    setCurrentPicture(state, payload) {
      state.currentPicture = payload;
    },
  },
  actions: {
    async fetchAllPosts() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        // redirect: "follow",
      };

      fetch("https://jsonplaceholder.typicode.com/posts/", requestOptions)
        .then((response) => response.json())
        .then((json) => store.commit("setPosts", json));
      return store.state.posts;
    },
    async fetchOnePost(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        // redirect: "follow",
      };

      fetch(
        "https://jsonplaceholder.typicode.com/posts/" + payload,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => store.commit("setCurrentPost", json));
      console.log(store.state.currentPost);
      return store.state.currentPost;
    },
    async fetchAllPictures() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        // redirect: "follow",
      };

      fetch("https://jsonplaceholder.typicode.com/photos/", requestOptions)
        .then((response) => response.json())
        .then((json) => store.commit("setPictures", json));

      // console.log(store.state.pictures[4999]);
      return store.state.pictures;
    },

    async fetchOnePicture(context, payload) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        // redirect: "follow",
      };
      fetch(
        "https://jsonplaceholder.typicode.com/photos/" + payload,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => store.commit("setCurrentPicture", json));
      return store.state.currentPicture;
    },
  },
  modules: {},
});

export default store;
