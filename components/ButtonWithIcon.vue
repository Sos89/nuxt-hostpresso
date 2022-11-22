<template>
  <div>
    <button class="btn d">
      <i class="icon"><slot></slot></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonWithIcon",
}
</script>

<style scoped>
.d{
  width: 82px;
  height: 44px;
  border: 1px solid silver;
  border-radius: 10px;
}
</style>
