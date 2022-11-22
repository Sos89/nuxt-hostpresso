<template>
  <div class="error_message">
    <IconComponent :class="icon"></IconComponent>
    Account details not recognised, please try again. </div>
</template>

<script>
export default {
  name: "ErrorMessageVomponent",
  data(){
    return {
      icon: 'fa-solid fa-circle-exclamation'

    }
  }
}
</script>

<style scoped>
  .error_message{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #750F0F;
    border: 1px solid #FF6A6A;
    border-radius: 12px;
    width: 357px;
    height: 50px;
    margin-bottom: 24px;
  }
</style>
