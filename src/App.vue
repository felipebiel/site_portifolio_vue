<template>
  <div id="app">
    <Header :isActive="isActive" @changeToggle="changeToggle" />
    <section class="banner" :class="{active: isActive}">
      <router-view />
    </section>
    <SideBar :isActive="isActive" />
  </div>
</template>
<script>
import Header from "./components/frontend/layouts/header/Header";
import SideBar from "./components/frontend/layouts/sidebar/SideBar";
export default {
  components: {
    Header,
    SideBar
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    changeToggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
</style>


