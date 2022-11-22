<template>
  <ol class="breadcrumb">
    <li v-for="(item, i) in crumbs" :key="i" class="item">
      <nuxt-link :to="item.to" class="link" active-class="activeLink">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>


export default {
  name: "BreadcrumbComponent",
  props: {
    showActive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    crumbs () {
      if (process.client) {
        const pathArray = this.$route.path.split('/')
        pathArray.shift()
        return pathArray.reduce((breadcrumbArray, path, idx) => {
          breadcrumbArray.push({
            to: this.buildBreadcrumbPath(breadcrumbArray, idx, path),
            title: path
          })
          return breadcrumbArray
        }, [])
      }
    }
  },
  methods: {
    buildBreadcrumbPath(breadcrumbArray, idx, path) {
      return breadcrumbArray[idx - 1]
        ? '/' + breadcrumbArray[idx - 1].to.replace('/','') + '/' + path
        : '/' + path
    }
  }
};
</script>

<style scoped>
.breadcrumb{
  background: linear-gradient(0.38deg, #f0f0f3 0.39%, #f1efef 167.06%);
  padding-left: 0;
}
.link{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #191919;
  margin: 10px;
  text-decoration: none;
  text-transform: capitalize;
}
a.nuxt-link-active {
  color: black!important;
  width: 100%;
}
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
