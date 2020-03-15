<template>
  <div id="navigation" :class="{active: isActive}">
    <ul>
      <li>
        <a href>Home</a>
      </li>
      <li>
        <a href>Sobre</a>
      </li>
      <li>
        <a href>Serviços</a>
      </li>
      <li>
        <a href>Portifólios</a>
      </li>
      <li>
        <a href>Contatos</a>
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