<template>
  <div>
    <router-link to="/">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 150 } }"
      >Pokemon</router-link
    >
    <router-link to="/about">About Page</router-link>
  </div>
</template>

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
