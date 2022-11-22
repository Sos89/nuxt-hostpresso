<template>
  <div class="error_message">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ErrorMessageComponent"
}
</script>

<style scoped>
  .error_message{
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #E21B1B;
    width: 357px;
    height: 50px;
  }
</style>
