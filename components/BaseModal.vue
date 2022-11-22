<template>
  <div>
    <b-modal
      centered
      :id="bvModalExample"
      hide-footer
      header-border-variant="white"
    >
      <template>
        <slot name="modalTitle"></slot>
      </template>
      <template class="d-block text-center">
        <slot name="modalContent"></slot>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    bvModalExample: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.modal-header{
    border: none !important;
  }
</style>
