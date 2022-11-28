<template>
<div>
  <div class="row">
    <div class="col-6">
      <template v-for="user in users">
        <p>{{user.user_id}} {{ user.product_id}}</p>
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
        {user_id: '20ad30', product_id: '103a'},
        {user_id: '30ad20', product_id: '103ahg'},
        {user_id: '20ad30', product_id: null},
        {user_id: 'ad3020', product_id: '103ah11'},
        {user_id: '20ad30', product_id: '103a12'},
        {user_id: '20ad30', product_id: null},
        {user_id: '30ad20', product_id: '103ah32'},
        {user_id: '20ad30', product_id: '103a34'},
        {user_id: '20ad30', product_id: null},
        {user_id: 'ad3020', product_id: '103a45'},
        {user_id: '20ad30', product_id: '103a233'},
        {user_id: 'ad3020', product_id: null},
        {user_id: '30ad20', product_id: '103ag4334'},
        {user_id: 'ad3020', product_id: '103a2321'},
        {user_id: '20ad30', product_id: null},
        {user_id: '30ad20', product_id: '103ah345'},
        {user_id: '20ad30', product_id: '103aj4344'},
        {user_id: 'ad3020', product_id: '103ag77'},
      ],
      res: [],
    }
  },
  methods: {
    sort() {
      // for (const a of this.users) {
      //   let arr = []
      //   for (const b of this.users) {
      //     if (a.user_id === b.user_id) {
      //       arr.push(b)
      //     }
      //   }
      //   console.log(arr)
      //
      //   // this.res.push(arr)
      //
      // }
      this.users.map((item) => {
        let arr = []
        this.users.map ((i) => {
          if (item.user_id === i.user_id){

            arr.push(i)

          }
        })

        this.res.push(arr)

      })
      // console.log(this.res[0])

    },
  }

}
</script>

<style scoped>

</style>
