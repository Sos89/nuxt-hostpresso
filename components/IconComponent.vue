<template>
  <div>
    <i :class="icon"></i>
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
