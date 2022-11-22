<template>
  <div>
    <div>
      <slot name="selectLabel">
        <span></span>
      </slot>
      <select
        class="form-control my-3 select"
        v-model="selectValue"
        aria-label="Default select example"
        v-bind="$attrs"
      >
        <option selected disabled value=""> {{name}} </option>
        <option v-for="data in dates" :key="data.id">{{ data.name }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'select-component',
  data() {
    return {
      selectValue: this.value
    }
  },
  props: {
    value:{
      type: String
    },
    name:{
      type: String
    },
    dates:{
      type: Array
    }
  },
  watch:{
    selectValue(value){
      this.$emit('input',value)
    }
  }
}
</script>
<style scoped>
.select{
  border: white;
  border-bottom: 2px solid silver;
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
