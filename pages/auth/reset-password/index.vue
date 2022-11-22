<template>
  <div class="forgot_password_page m-auto">
    <ErrorMessageComponent
      v-if="message"
      icon="fa-solid fa-circle-exclamation"
    >
      <p class="mt-3 ml-3"> Account details not recognised, please try again. </p>
    </ErrorMessageComponent>

    <BuildParagraph>
      <span>Forgot password?</span>
    </BuildParagraph>

    <PageParagraph>
      <span>Enter your email address and we'll send you a password reset link.</span>
    </PageParagraph>

    <InputWithLabelComponent
      type="email"
      :label="label"
      v-model="email"
    />

    <ButtonComponent>
      <button
        class="btn button"
        @click="forgotPassword"
      >Send reset link</button>

      <b-modal ref="my-modal" id="modal-1" hide-footer>
        <div class="bg_fon">
          <IconComponent icon="fa-solid fa-check"/>
        </div>
        <BuildParagraph class="text-center my-3">
          <span>Password link sent</span>
        </BuildParagraph>

        <PageParagraph class="text-center mb-5">
          <span>Please check your inbox elliot@gmail.com</span>
        </PageParagraph>
      </b-modal>
    </ButtonComponent>
  </div>
</template>
<script>
export default {
  name: 'Forgot-password-page',
  layout: 'AuthenticationLayout',
  data(){
    return {
      label: 'Email address',
      email: '',
      message: false
    }
  },
  methods: {
    forgotPassword(){
      if (this.email){
        this.$refs['my-modal'].show()
      }else{
        this.message = true
      }
    }
  },
  watch: {
    email(newValue){
      if (this.email){
        this.message = false
      }
    }
  }
}
</script>
<style scoped>
.forgot_password_page{
  width: 358px;
  margin-top: 246px !important;
}
.button{
  font-family: 'Public Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #303C91;
  border-radius: 8px;
  width: 358px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
}
.bg_fon{
  background-image: url('static/image/Rectangle.png');
  background-position: center;
  background-size: cover;
  width: 73px;
  height: 73px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #303C91;
}
</style>
