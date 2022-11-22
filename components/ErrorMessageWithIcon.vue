<template>
  <div class="error_message">
    <i :class="icon" class="errorIcon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ErrorMessageWithIcon",
  props: {
    icon: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.error_message{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #750F0F;
  border: 1px solid #FF6A6A;
  border-radius: 12px;
  width: 357px;
  height: 40px;
}
.errorIcon{
  color: #E21B1B;
}
</style>
