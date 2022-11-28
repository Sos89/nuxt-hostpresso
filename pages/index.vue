<template>
  <div>
    <div class="homePage">
      <div class="side_bar">
        <div>
          <HeaderComponent class="logo">
            <div class="text-center">
              <img
                src="/image/logo1.png"
                class="img-fluid"
              >
            </div>
          </HeaderComponent>

          <div v-for="item in nuxtLink">
            <NuxtLinkWithIcon
              nuxt_link_component="nuxt_link_content"
              nuxt-link-class="fg"
              :link-to="item.href"
              :icon-name="item.icon"
            >
              <template v-slot:nLink>
                <span class="desc"> {{ item.name }} </span>
              </template>
            </NuxtLinkWithIcon>
          </div>
        </div>

        <div class="mb-5">
          <NuxtLinkWithIcon
            nuxt_link_component="nuxt_link_content"
            nuxt-link-class="fg"
            v-for="support in supports"
            :key="support.id"
            :link-to="support.href"
            :icon-name="support.icon"
          >
            <template v-slot:nLink>
              <span class="desc"> {{support.name}} </span>
            </template>
          </NuxtLinkWithIcon>
        </div>
      </div>
      <NavbarComponent>
        <template v-slot:navbarContent>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <nuxt-link class="nav-link" to="/">Home </nuxt-link>
              </li>

              <li class="nav-item active">
                <nuxt-link class="nav-link" to="/support"> Support </nuxt-link>
              </li>
              <li class="nav-item active">
                <nuxt-link class="nav-link" to="/support/ticket-list"> Ticket list </nuxt-link>
              </li>
            </ul>
            <ul class="navbar-nav float-right ml-5">
              <li class="nav-item active liHover">Auth
                <ul class="ulHover navbar-nav">
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/auth/login"> Login </nuxt-link>
                  </li>
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/auth/sign-up"> Sign up </nuxt-link>
                  </li>
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/auth/reset-password"> Reset Password </nuxt-link>
                  </li>
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/auth/forgot-password"> Forgot Password </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </template>
      </NavbarComponent>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      nuxtLink: [
        {id: 1, name: 'Dashboard', icon: 'fa-solid fa-house', href: '#' },
        {id: 2, name: 'Domains', icon: 'fa-brands fa-dribbble', href: '#' },
        {id: 3, name: 'Web Hosting', icon: 'fa-solid fa-desktop', href: '#' },
        {id: 4, name: 'Email', icon: 'fa-solid fa-envelope', href: '#' },
        {id: 5, name: 'Cloud Servers', icon: 'fa-solid fa-cloud', href: '#' },
        {id: 6, name: 'Wordpress', icon: 'fa-brands fa-wordpress', href: '#' },
        {id: 7, name: 'Node Apps', icon: 'fa-brands fa-node-js', href: '#' },
        {id: 8, name: 'Docker', icon: 'fa-brands fa-docker', href: '#' },
      ],
      supports: [
        { id: 1, name: 'Support', icon: 'fa-regular fa-life-ring', href: '/support' },
        { id: 2, name: 'Team', icon: 'fa-solid fa-user-plus', href: '#' },
        { id: 3, name: 'Billing', icon: 'fa-solid fa-cloud', href: '#' },
      ]
    }
  }
}
</script>

<style scoped>
.homePage{
  display: flex;
}
.ulHover{
  background: #b7b2b2;
  position: absolute;
  width: 200px;
  height: 200px;
  display: none;
}
.liHover{
  cursor: pointer;
}
.liHover:hover .ulHover{
    display: block;
}
.logo{
  padding-top: 32px;
  margin-bottom: 45px;
}
.side_bar{
  width: 232px;
  background: linear-gradient(180deg, #3B3C52 0%, #2B2E67 100%);
  height: 100vh;
  padding-left: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nuxt_link_content{
  margin-top: 21px!important;
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  color: #FFFFFF!important;
}
.desc{
  margin-left: 21px;
}
</style>
