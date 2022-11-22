<template>
  <div>
    <label>{{label}}</label>
    <input
      :type="type"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      class="form-control input"
    >
  </div>
</template>

<script>
export default {
  name: "InputWidthLabelComponent",
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  }
}
</script>

<style scoped>
  .input{
    border: none;
    border-bottom: 2px solid silver;
  }
</style>
