<template>
  <div id="navigation" :class="{active: isActive}">
    <ul>
      <li>
        <router-link :to="{ name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sobre'}">Sobre</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'servico'}">Serviços</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'portifolio'}">Portifólios</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contato'}">Contatos</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>