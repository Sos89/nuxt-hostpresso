<template>
  <div>
    <div>
      <slot name="tHeader"></slot>
    </div>

    <div class="itemRow">
      <slot name="tBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsComponent",
  props: {
    tHeader: {
      type: String
    },
    tBody: {
      type: String
    },
    tableClass: {
      type: String
    }
  }
}
</script>

<style scoped>
.tableClass{
  width: 1050px;

}
.itemRow{
  background: white;
  padding: 5px;
  text-align: left;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
