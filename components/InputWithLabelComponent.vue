<template>
  <div>
    <slot name="inputLabel"></slot>
    <b-form-group
      :label="label" class="input_component"
    >
      <b-input-group-prepend>
      <input
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="form-control input"
      >
        <slot></slot>
      </b-input-group-prepend>
    </b-form-group>

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
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },

}
</script>

<style scoped>
  .input_component{
    margin-top: 20px;
    border-bottom: 2px solid silver;
  }
  .input{
    border: none;
  }
  .input:focus{
    box-shadow: none;
  }
  span{
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    color: #8B8C98;
  }
</style>
