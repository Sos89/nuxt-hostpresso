<template>
  <div>
    <div class="img">
      <nuxt-link to="/auth/login">
        <slot></slot>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    logo: {
      type: String,
    }
  }
}
</script>

<style scoped>
.img{
  width: 150px;
  height: 50px;
}
</style>
