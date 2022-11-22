<template>
  <div class="loginPage">
    <ErrorMessageWithIcon
      v-if="errorMessage"
      icon="fa-solid fa-circle-exclamation"
    >
      <p class="mt-3 ml-3"> Account details not recognised, please try again. </p>
    </ErrorMessageWithIcon>

    <BuildParagraph>
      <span>Login</span>
    </BuildParagraph>

    <PageParagraph>
      <span>Welcome back! Please enter email and password to login in into your account.</span>
    </PageParagraph>

    <div v-for="input in inputs">
      <InputWithLabelComponent
        :type="input.type"
        :label="input.label"
        v-model="input.model"
      />
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
      <button
        class="btn loginButton"
        @click="login"
      >Login</button>
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



  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'AuthenticationLayout',
  data() {
    return {
      errorMessage: false,
      inputs: {
        email: {
          type: 'email',
          label: 'Email',
          model: ''
        },
        password: {
          type: 'password',
          label: 'Password',
          model: ''
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
        this.$router.push('/auth/forgot-password')
      }else{
        this.errorMessage = true
      }
    },
  },
  watch: {
    "inputs.email.model" (newValue){
      if (this.inputs.email.model || this.inputs.password.model){
        this.errorMessage = false
      }
    }
  }
}
</script>
<style scoped>
.loginPage{
  width: 358px;
  margin: auto;
}
.loginButton{
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
.buttonWith{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
