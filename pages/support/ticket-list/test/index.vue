<template>
<div>
  <div class="row">
    <div class="col-6">
      <template v-for="user in users">
        <p><b>User id:</b> {{user.user_id}} <b>Product id:</b> {{ user.product_id}}</p>
      </template>
    </div>
    <div class="col-6">
      <button @click="sort" class="btn btn-success">Sort</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "test",
  layout: 'SideBar',
  data(){
    return {
      users: [
        { user_id: '20ad30', product_id: '103a' },
        { user_id: '30ad20', product_id: '103ahg' },
        { user_id: '20ad30', product_id: null },
        { user_id: 'ad3020', product_id: '103ah11' },
        { user_id: '20ad30', product_id: '103a12' },
        { user_id: '20ad30', product_id: null },
        { user_id: '30ad20', product_id: '103ah32' },
        { user_id: '20ad30', product_id: '103a34' },
        { user_id: '20ad30', product_id: null },
        { user_id: 'ad3020', product_id: '103a45' },
        { user_id: '20ad30', product_id: '103a233' },
        { user_id: 'ad3020', product_id: null },
        { user_id: '30ad20', product_id: '103ag4334' },
        { user_id: 'ad3020', product_id: '103a2321' },
        { user_id: '20ad30', product_id: null },
        { user_id: '30ad20', product_id: '103ah345' },
        { user_id: '20ad30', product_id: '103aj4344' },
        { user_id: 'ad3020', product_id: '103ag77' },
      ],
      user: []
    }
  },
  methods: {
    sort() {
      let res = []
      this.users.map((el) => {
        const arr = {user_id: el.user_id, products: []}
        this.users.map ((el2) => {
          if (el.user_id === el2.user_id){
            if (el2.product_id){
              arr.products.push(el2.product_id)
            }
          }
        })
        res.push(arr)
      })
      const uniqueIds = [];
      const unique = res.filter(element => {
        const isDuplicate = uniqueIds.includes(element.user_id);
        if (!isDuplicate) {
          uniqueIds.push(element.user_id);
          return true;
        }
        return false;
      });
      unique.map((el)=> {
        this.user.push(el)
      })
    },
  }
}
</script>

<style scoped>

</style>
