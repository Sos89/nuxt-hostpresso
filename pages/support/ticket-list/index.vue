<template>
  <div class="ticketsListPage">
    <div class="tickets">
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
                <nuxt-link to="#" class="navParagraph">
                  KNOWLEDGEBASE
                </nuxt-link>
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
        <ItemsComponent v-for="item in ticketItems" :key="item.id">
          <template v-slot:tBody>
            <td class="bgWhite">{{ item.id }}</td>
            <td class="bgWhite">{{ item.lineList }}</td>
            <td class="bgWhite">{{ item.uploads }}</td>
            <td class="bgWhite">{{ item.answered }}</td>
            <td class="bgWhite">{{ item.time }}</td>
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
          id: '#1234',
          lineList: 'Hosting 1st Line',
          uploads: 'How can I upload my website?',
          answered: 'Answered',
          time: '3 minutes ago'
        },
        {
          id: '#1234',
          lineList: 'Hosting 1st Line',
          uploads: 'How can I upload my website?',
          answered: 'Waiting Reply',
          time: '3 minutes ago'
        },
        {
          id: '#1234',
          lineList: 'Hosting 1st Line',
          uploads: 'How can I upload my website?',
          answered: 'Scheduled',
          time: '3 minutes ago'
        },
        {
          id: '#1234',
          lineList: 'Hosting 1st Line',
          uploads: 'How can I upload my website?',
          answered: 'Closed',
          time: '3 minutes ago'
        },
      ]
    }
  },
  methods: {
    openTickets() {
      this.ticket = true
    }
  }
}
</script>
<style scoped>
.tickets{
  margin-top: 46px;
  /*margin-left: 125px;*/
}
.search{
  margin-left: 350px;
}
#navbarSupportedContent{
  display: flex;
  justify-content: space-evenly;
  margin: 0;
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
