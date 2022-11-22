<template>
  <div>
    <div class="cardStiles" :class="{active: toggleId === cardId}">
      <div class="iconParagraph">
        <i :class="cardIcon" class="icon float-left"></i>
        <slot name="cardParagraph"></slot>
      </div>
      <div>
        <slot name="cardText"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    cardStyle: {
      type: String,
    },
    cardIcon: {
      type: String,
    },
    toggleId: {
      type: Number,
    },
    cardId: {
      type: Number,
    }
  }
}
</script>

<style scoped>
.cardStiles{
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 344px;
  height: 170px;
  margin: 10px;
  padding: 10px;
  outline: 4px solid transparent;
  border-radius: 4px;
}
.cardStiles.active{
  outline-color: green;
}
.icon{
  font-size: 64px;
  color: green;
  font-weight: 500;
  margin-right: 30px;
}
.iconParagraph{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin-bottom: 15px;
}
</style>
