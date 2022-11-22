<template>
  <div class="container-span">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BuildParagraph",
}
</script>

<style scoped>
  span {
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;
    color: #191919;
    margin-top: 24px;
    margin-bottom: 24px;
  }

</style>
