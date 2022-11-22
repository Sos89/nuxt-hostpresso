<template>
<div>
  <slot name="textareaLabel"></slot>
  <b-form-textarea
    id="textarea-rows"
    :value="value"
    @input="value = $event.target.value"
    placeholder="Tall textarea"
    rows="8"
  ></b-form-textarea>
</div>
</template>

<script>
export default {
  name: "TextareaComponent",
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      text: ''
    }
  }
}
</script>

<style scoped>

</style>
