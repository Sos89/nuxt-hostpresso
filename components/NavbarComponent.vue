<template>
  <div class="navbar_content">
    <nav class="navbar navbar-expand-lg navbar-light">
      <slot name="navbarContent"></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>
.navbar_content{
  margin: 0;
  padding: 0;
}
</style>
