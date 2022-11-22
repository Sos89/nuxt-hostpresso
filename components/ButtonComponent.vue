<template>
  <div>
    <button
      class="btn loginButton"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    dataBsToggle: {
      type: String
    },
    dataBsTarget: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.loginButton{
  font-family: 'Public Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #303C91;
  border-radius: 8px;
  width: 358px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
}
</style>
