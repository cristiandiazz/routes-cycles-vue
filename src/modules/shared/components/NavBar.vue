<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 150 } }"
      >Pokemon</router-link
    >
    <router-link to="/about">About Page</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
  data() {
    return {
      links: [
        { to: "/home", name: "home" },
        { to: "/pokemon/1", name: "pokemon" },
        { to: "/about", name: "about" },
        { to: "https://google.com", name: "google" },
      ],
    };
  },
};
</script>
CustomLink

<style scoped>
div {
  padding: 0 2rem;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 1rem;
}

.router-link-exact-active {
  color: #42b983;
}
</style>
