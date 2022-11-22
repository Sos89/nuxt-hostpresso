<template>
  <div class="sign_up_component m-auto">
    <BoldParagraph>
      <span>Sign up</span>
    </BoldParagraph>

    <div class="errorMessage">
      <ErrorMessageWithIcon icon="fa-solid fa-circle-exclamation" v-if="message">
        <span class="ml-2">Account details not recognised, please try again.</span>
      </ErrorMessageWithIcon>
    </div>
    <PageParagraph>
      <span>Please enter email and password and confirm password to sign up.</span>
    </PageParagraph>

    <div v-for="input in inputs">
      <InputWithLabelComponent
        :type="input.type"
        :label="input.label"
        v-model="input.value"
      >
        <i @click="showPassword(input.id)" class="btn icon" :class="input.icon"></i>
      </InputWithLabelComponent>
      <div class="errorMessage">
        <ErrorMessageComponent v-if="input.errors">
          {{ input.errors }}
        </ErrorMessageComponent>
      </div>
    </div>

    <ButtonComponent>
      <span
        @click="register"
        class="buttonValue"
      >
        Register
      </span>
    </ButtonComponent>
    <PageParagraph class="text-center mt-5">
      <span>Login with:</span>
    </PageParagraph>

    <div class="buttonWith mt-4">
      <div v-for="button in buttonIcon">
        <ButtonWithIcon>
          <i :class="button.icon"></i>
        </ButtonWithIcon>
      </div>
    </div>

    <PageParagraph class="mt-5 text-center">
      <span>I’m already a member <nuxt-link class="ml-2" to="/auth/login">Sign in</nuxt-link> </span>
    </PageParagraph>

  </div>
</template>

<script>
export default {
  name: "index.vue",
  layout: 'AuthenticationLayout',
  data(){
    return {
      message: false,
      inputs: {
        email: {
          id: 1,
          type: 'email',
          label: 'Email address',
          value: '',
          errors: ''
        },
        password: {
          id: 2,
          type: 'password',
          label: 'Password',
          icon: 'fa-solid fa-eye',
          value: '',
          errors: ''
        },
        confirmPassword: {
          id: 3,
          type: 'password',
          label: 'Confirm Password',
          icon: 'fa-solid fa-eye',
          value: '',
          errors: ''
        },
      },
      buttonIcon: {
        google: {icon: 'fa-brands fa-google'},
        sad: {icon: 'fa-brands fa-facebook'},
        github: {icon: 'fa-brands fa-github'}
      }
    }
  },
  methods: {
    register(){
      if (this.inputs.confirmPassword.value && this.inputs.password.value && this.inputs.email.value !== ''){
        let valid = true;
        if (!this.inputs.email.value) {
          this.inputs.email.errors = 'Email required';
          valid = false;
        }
        if (!this.validEmail(this.inputs.email.value)) {
          this.inputs.email.errors = 'Incorrect email';
          valid = false;
        }
        if (!this.inputs.password.value) {
          this.inputs.password.errors = 'Password required';
          valid = false;
        }
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
            this.$router.push('/auth/login')
          }

        }
      }else {
        this.message = true
      }
    },
    showPassword(id){
      if (this.inputs.password.id === id){
        this.inputs.password.type = this.inputs.password.type === 'text' ? 'password' : 'text';
      }
      if (this.inputs.confirmPassword.id === id){
        this.inputs.confirmPassword.type = this.inputs.confirmPassword.type === 'text' ? 'password' : 'text';
      }
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function (password) {
      let pass = /^(?=.*?[a-z])(?=.*?[0-9]).*$/
      return pass.test(password);
    }
  },
  watch: {
    "inputs.email.value"(newValue){
      if (this.inputs.email.value !== ''){
        this.message = false
      }
      if (this.validEmail(this.inputs.email.value)) {
        this.inputs.email.errors = ''
      }
    },
    "inputs.password.value"(newValue){
      if (this.inputs.password.value !== ''){
        this.message = false
      }
      if (this.validPassword(this.inputs.password.value)) {
        this.inputs.password.errors = ''
      }
    },
    "inputs.confirmPassword.value"(newValue){
      if (this.inputs.confirmPassword.value !== ''){
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
.sign_up_component{
  width: 358px;
  margin-top: 100px!important;
}
.buttonValue{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.buttonWith{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
nuxt-link {
  text-decoration: none;

}

.errorMessage{
  height: 30px;
  margin-bottom: 20px;
}
</style>
