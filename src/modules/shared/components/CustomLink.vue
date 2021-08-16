<template>
  <a v-if="isExternalLink" :href="link.to">{{ link.name }}</a>
  <router-link v-else :to="link.to"> </router-link>
  <a :href="link.to" :class="isActive ? 'isActive' : '.normal-link'">
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
      return this.link.to.startsWith("https");
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
