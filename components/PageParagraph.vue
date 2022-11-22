<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
}
</script>

<style scoped>
  h3 {
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;
    color: #191919;
    margin-top: 24px;
  }
  p{
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #8B8C98;
  }
</style>
