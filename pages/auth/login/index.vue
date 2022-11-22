<template>
  <div class="loginPage">
    <div class="errorMessage">
      <ErrorMessageWithIcon
        v-if="errorMessage"
        icon="fa-solid fa-circle-exclamation"
      >
        <p class="mt-3 ml-3"> Account details not recognised, please try again. </p>
      </ErrorMessageWithIcon>
    </div>

    <BoldParagraph>
      <span>Login</span>
    </BoldParagraph>

    <PageParagraph>
      <span>Welcome back! Please enter email and password to login in into your account.</span>
    </PageParagraph>

    <div v-for="input in inputs">
      <InputWithLabelComponent
        :type="input.type"
        :label="input.label"
        v-model="input.model"
      />

      <div class="errorMessage">
        <ErrorMessageComponent v-if="input.errors">
          {{ input.errors }}
        </ErrorMessageComponent>
      </div>

    </div>

    <PageParagraph
      class="float-right btn"
    >
      <nuxt-link
        to="/auth/forgot-password"
        class="btn"
      >
        Forgot password?
      </nuxt-link>
    </PageParagraph>

    <ButtonComponent>
      <span
        class="buttonValue"
        @click="login"
      >
        Login
      </span>
    </ButtonComponent>

    <PageParagraph
      text="Login with:"
      class="text-center my-5"
    />

    <div class="buttonWith">
      <div v-for="button in buttonIcon">
        <ButtonWithIcon>
          <i :class="button.icon"></i>
        </ButtonWithIcon>
      </div>
    </div>

    <PageParagraph class="text-center mt-5">
      <span>Don’t have an account? <nuxt-link class="ml-2" to="/auth/sign-up">Sign Up</nuxt-link> </span>

    </PageParagraph>



  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'AuthenticationLayout',
  data() {
    return {
      errorMessage: false,
      // errors: false,
      inputs: {
        email: {
          type: 'email',
          label: 'Email',
          model: '',
          errors: ''
        },
        password: {
          type: 'password',
          label: 'Password',
          model: '',
          errors: ''
        }
      },

      buttonIcon: {
        google: {icon: 'fa-brands fa-google'},
        sad: {icon: 'fa-brands fa-facebook'},
        github: {icon: 'fa-brands fa-github'}
      }
    }
  },
  methods: {
    login(){
      if (this.inputs.email.model || this.inputs.password.model){
        let valid = true;
        if (!this.inputs.email.model) {
          this.inputs.email.errors = 'Email required';
          valid = false;
        }
        if (!this.validEmail(this.inputs.email.model)) {
          this.inputs.email.errors = 'Incorrect email';
          valid = false;
        }
        if (!this.inputs.password.model) {
          this.inputs.password.errors = 'Password required';
          valid = false;
        }
        if (!this.validPassword(this.inputs.password.model)) {
          this.inputs.password.errors = 'Incorrect password';
          valid = false;
        }

        if(valid){
          this.$router.push('/auth/forgot-password');
        }

      }else{
        this.errorMessage = true
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
    "inputs.email.model" (newValue){
      if (this.inputs.email.model || this.inputs.password.model){
        this.errorMessage = false
      }
      if (this.validEmail(this.inputs.email.model)){
        this.inputs.email.errors = ''
      }
    },
    "inputs.password.model" (newValue){
      if (this.validPassword(this.inputs.password.model)) {
        this.inputs.password.errors = ''
      }
    },
  }
}
</script>
<style scoped>
.loginPage{
  width: 358px;
  margin: auto;
}
.buttonValue{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}

nuxt-link {
  text-decoration: none;

}
.buttonWith{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.errorMessage{
  height: 30px;
}
</style>
