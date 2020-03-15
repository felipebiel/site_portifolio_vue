<template>
  <header id="header" :class="{active: isActive}">
    <router-link :to="{ name: 'home'}" class="logo">Logo</router-link>
    <div id="toggle" @click.prevent="changeToggle()"></div>
  </header>
</template>

<script>
export default {
  props: {
    isActive: {
      default: ""
    }
  },
  methods: {
    changeToggle() {
      this.$emit("changeToggle");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>