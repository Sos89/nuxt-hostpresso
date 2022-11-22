<template>
  <div :class="nuxt_link_component">
    <nuxt-link
      :prefetch="false"
      :to="{ path: linkTo}"
      :class="nuxtLinkClass"
    >
      <i :class="iconName" class="icon"></i>
      <slot name="nLink"></slot>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'NuxtLinkWithIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    linkTo: {
      type: String,
      required: true
    },
    nuxt_link_component: {
      type: String,
    },
    nuxtLinkClass: {
      type: String,
    }
  },
  methods: {
    test() {
      console.log(123123)
    }
  }
}
</script>
<style scoped>

  a{
    text-decoration: none!important;
  }
/*a.nuxt-link-active {*/
/*  background: #FFFFFF;*/
/*  color: black!important;*/
/*  width: 100%;*/
/*}*/
/*!* exact link will show the primary color for only the exact matching link *!*/
/*a.nuxt-link-exact-active {*/
/*  color: #00c58e;*/
/*}*/
.fg{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  color: #FFFFFF;
}
.navbarLink{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #191919;
}
.icon{
  margin-right: px;
}
</style>
