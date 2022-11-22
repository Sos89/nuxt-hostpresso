<template>
  <div class="container-span">
    <slot>
      <span></span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BoldParagraph",
}
</script>

<style scoped>
  .container-span {
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
