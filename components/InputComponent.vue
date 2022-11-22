<template>
  <div class="input_component">
    <b-input-group>
      <input
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        v-bind="$attrs"
        class="form-control input"
      />
    </b-input-group>
  </div>
</template>
<script>
export default {
  name: 'Input-component',
  props: {
    type: {
      required: true,
      type: String
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.input_component{
  margin-top: 20px;
}
.input{
  border: none;
  border-bottom: 2px solid silver;
  outline-offset: 0px;
  outline: none;
}
.input:focus{
  box-shadow: none;
}
</style>
