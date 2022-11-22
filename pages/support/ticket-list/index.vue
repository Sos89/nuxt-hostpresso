<template>
  <div class="ticketsListPage">
    <div class="tickets">
      <NuxtLink to="ticket-list/test"> test</NuxtLink>
      <NavbarComponent>
        <template v-slot:navbarContent>
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav float-left">
              <li>
                <span @click="openTickets" class="navParagraph">
                  Tickets
                </span>
              </li>
              <li class="nav-item">
                <span class="navParagraph" @click="sortAb">
                  KNOWLEDGEBASE
                </span>
              </li>
              <li class="nav-item">
                <nuxt-link to="#" class="navParagraph">
                  SERVICE STATUS
                </nuxt-link>
              </li>
            </ul>
           <div class="float-right search">
             <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
           </div>
          </div>
        </template>
      </NavbarComponent>
<!--      /////////////-->
      <div v-if="ticket" class="w-100">
        <ItemsComponent v-for="item in ticketItems" :key="item.id" class="itemClass">
          <template v-slot:tBody>
            <div class="text-center itemId">{{ item.id }}</div>
            <div class="text-center itemList">{{ item.lineList }}</div>
            <div class="text-center itemUpload">{{ item.uploads }}</div>
            <div class="text-center itemAnswer" :style="item.color">{{ item.answered }}</div>
            <div class="text-center itemATime ml-2">{{ item.time }}</div>
          </template>
        </ItemsComponent>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'SideBar',
  data(){
    return {
      ticket: false,
      ticketItems: [
        {
          id: 1,
          lineList: 'Hosting 1st Line',
          uploads: 'AbHow can I upload my website?',
          answered: 'Answered',
          time: '3 minutes ago',
          color: {background: '#33C79A'},
        },
        {
          id: 2,
          lineList: 'Hosting 1st Line',
          uploads: 'CHow can I upload my website?',
          answered: 'Waiting Reply',
          time: '3 minutes ago',
          color: {background: '#5C51D0'},
        },
        {
          id: 3,
          lineList: 'Hosting 1st Line',
          uploads: 'BHow can I upload my website?',
          answered: 'Scheduled',
          time: '3 minutes ago',
          color: {background: '#FCC500'},
        },
        {
          id: 4,
          lineList: 'Hosting 1st Line',
          uploads: 'GHow can I upload my website?',
          answered: 'Closed',
          time: '3 minutes ago',
          color: {background: '#A7A9BE'},
        },
      ]
    }
  },
  methods: {
    openTickets() {
      this.ticket = true
    },

    sortAb() {
      this.ticketItems.reverse()
    }
  }
}
</script>
<style scoped>
.tickets{
  margin-top: 46px;
}
.search{
  margin-left: 350px;
}
#navbarSupportedContent{
  display: flex;
  justify-content: space-evenly;
  margin: 0;
}
.itemClass{
  width: 1050px;
}
.itemList{
  width: 250px;
}
.itemUpload{
  width: 300px;
}
.itemAnswer{
  width: 150px;
  padding: 5px;
  border-radius: 10px;
}
.itemATime{
  width: 150px;
}

.navParagraph{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #000000;
  margin: 13px;
  cursor: pointer;
}
</style>
