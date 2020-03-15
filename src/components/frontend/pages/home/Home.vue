<template>
  <div>
    <section class="banner" :class="{active: isActive}">
      <header>
        <a href class="logo">Logo</a>
        <div id="toggle" @click.prevent="isActive = !isActive"></div>
      </header>

      <div class="content">
        <h2>
          Ola Mundo
          <br />Sou um <span>portifólio</span>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui in nibh malesuada placerat. Curabitur sed tellus sed diam tincidunt sollicitudin. Fusce pellentesque dolor ac odio accumsan feugiat. Proin id nulla arcu. Maecenas pharetra velit turpis, eleifend commodo tortor malesuada non. Phasellus ut vehicula sem, et pulvinar nisi. Suspendisse ac odio at erat aliquam iaculis non sit amet elit. Cras et augue placerat.</p>
        <a href>Saber mais</a>
      </div>

      <ul class="sci">
        <li>
          <a href>
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href>
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </section>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>