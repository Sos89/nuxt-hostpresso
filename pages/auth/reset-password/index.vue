<template>
  <div class="reset_password_page m-auto">

    <BoldParagraph>
      <span>Reset password?</span>
    </BoldParagraph>

    <PageParagraph>
      <span>Please enter a new password</span>
    </PageParagraph>


    <div v-for="input in inputs">
      <InputWithLabelComponent
        :type="input.type"
        :label="input.label"
        v-model="input.value"
      >
        <i @click="showPassword(input.id)" class="fa-solid fa-eye btn"></i>
      </InputWithLabelComponent>
      <div class="errorMessage">
        <ErrorMessageComponent v-if="input.errors">
          <span>{{ input.errors }}</span>
        </ErrorMessageComponent>
      </div>
    </div>

    <div class="errorMessage">
      <ErrorMessageComponent v-if="errorConfirm">
        <p>Passwords do not match</p>
      </ErrorMessageComponent>
    </div>

    <ButtonComponent>
      <span
        @click="signUp"
        class="buttonValue"
      >Login</span>
    </ButtonComponent>
  </div>
</template>
<script>
export default {
  name: 'Reset-password-page',
  layout: 'AuthenticationLayout',
  data(){
    return {
      message: false,
      errorConfirm: false,
      inputs: {
        password: {
          id: 1,
          type: 'password',
          label: 'Password',
          value: '',
          errors: ''
        },
        confirmPassword: {
          id: 2,
          type: 'password',
          label: 'Confirm Password',
          value: '',
          errors: ''
        }
      },
    }
  },
  methods: {
    showPassword(id){
      if (this.inputs.password.id === id){
        this.inputs.password.type = this.inputs.password.type ==='text' ? 'password': 'text'
      }
      if (this.inputs.confirmPassword.id === id){
        this.inputs.confirmPassword.type = this.inputs.confirmPassword.type ==='text' ? 'password': 'text';
      }
    },
    signUp(){
        if (this.inputs.confirmPassword.value !== this.inputs.password.value){
          this.errorConfirm = true
        }
      let valid = true;
      if (!this.validPassword(this.inputs.password.value)) {
        this.inputs.password.errors = 'Incorrect password';
        valid = false;
      }
      if (!this.inputs.confirmPassword.value) {
        this.inputs.confirmPassword.errors = 'Password required';
        valid = false;
      }
      if (!this.validPassword(this.inputs.confirmPassword.value)) {
        this.inputs.confirmPassword.errors = 'Incorrect password';
        valid = false;
      }
      if (this.inputs.confirmPassword.value !== this.inputs.password.value){
        this.message = true
      }else {
        if(valid){
          this.$router.push('/auth/sign-up')
        }

      }
    },
    validPassword: function (password) {
      let pass = /^(?=.*?[a-z])(?=.*?[0-9]).*$/
      return pass.test(password);
    }
  },
  watch: {
    "inputs.password.value"(newValue){
      if (this.inputs.password.value){
        this.message = false
      }
      if (this.validPassword(this.inputs.password.value)) {
        this.inputs.password.errors = ''
      }
    },
    "inputs.confirmPassword.value"(newValue){
      if (this.inputs.confirmPassword.value){
        this.message = false
      }
      if (this.validPassword(this.inputs.confirmPassword.value)) {
        this.inputs.confirmPassword.errors = ''
      }
    }
  }
}
</script>
<style scoped>
.reset_password_page{
  width: 358px;
  margin-top: 226px !important;
}
.buttonValue{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.errorMessage{
  height: 30px;
}
</style>
