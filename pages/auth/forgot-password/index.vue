<template>
  <div class="forgot_password_page m-auto">
    <div class="errorMessage">
      <ErrorMessageWithIcon
        v-if="message"
        icon="fa-solid fa-circle-exclamation"
      >
        <p class="mt-3 ml-3"> Account details not recognised, please try again. </p>
      </ErrorMessageWithIcon>
    </div>

    <BoldParagraph>
      <span>Forgot password?</span>
    </BoldParagraph>

    <PageParagraph>
      <span>Enter your email address and we'll send you a password reset link.</span>
    </PageParagraph>

    <InputWithLabelComponent
      type="email"
      :label="label"
      v-model="email"
    />
    <div class="errorMessage">
      <ErrorMessageComponent v-if="errorValid">
        <span>{{errorValid}}</span>
      </ErrorMessageComponent>
    </div>

    <ButtonComponent>
      <span
        class="buttonValue"
        @click="forgotPassword"
      >
        Send reset link
      </span>
    </ButtonComponent>


    <BaseModal
      bv-modal-example="bv-modal-example"
    >
      <template v-slot:modalContent>
        <div class="bg_fon">
          <IconComponent icon="fa-solid fa-check"/>
        </div>
        <BoldParagraph class="text-center my-3">
          <span>Password link sent</span>
        </BoldParagraph>
        <PageParagraph class="text-center mb-5">
          <span>Please check your inbox elliot@gmail.com</span>
        </PageParagraph>
      </template>
    </BaseModal>



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
      message: false,
      errorValid: ''
    }
  },
  methods: {

     forgotPassword(){
       let valid = true
      if (this.email){
        if (!this.emailValid(this.email)){
          this.errorValid = 'Incorrect email'
          valid = false
        }
        if (valid){
          this.$bvModal.show('bv-modal-example')
        }
      }else{
        this.message = true
      }
    },
    emailValid: function (email){
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  watch: {
    email(newValue){
      if (this.email){
        this.message = false
      }
      if (this.emailValid(this.email)){
        this.errorValid = ''
      }
    }
  }
}
</script>
<style scoped>
.forgot_password_page{
  width: 358px;
  margin-top: 206px !important;
}
.buttonValue{
  width: 100%;
  height: 100%;
  margin-top: 15px;
}
.bg_fon{
  background-image: url('static/image/Group2513.png');
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
.errorMessage{
  height: 30px;
}
</style>
