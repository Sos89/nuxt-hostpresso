<template>
  <div class="container-span">
    <slot>
      <span></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "PageParagraph",
}
</script>

<style scoped>
  .container-span{
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #8B8C98;
  }
</style>
