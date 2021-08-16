<template>
  <a v-if="isExternalLink" target="_blank" :href="link.to" class="normal-link">
    {{ link.name }}</a
  >
  <router-link v-else :to="{ name: link.to, params: { id: link.id } }">
  </router-link>
  <a :class="isActive ? 'isActive' : '.normal-link'">
    {{ link.name }}
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style lang="scss" scoped>
.isActive {
  color: #42b983;
}

.normal-link {
  color: #c6c5c5;
}
</style>
