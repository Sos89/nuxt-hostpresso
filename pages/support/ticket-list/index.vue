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
                <span class="navParagraph" @click="sort">
                  <template v-if="up">
                    <i class="fa-solid fa-caret-up"></i>
                  </template>
                  <template v-if="down">
                    <i class="fa-solid fa-caret-down"></i>
                  </template>
                  KNOWLEDGEBASE
                </span>
              </li>
              <li class="nav-item">
                <span @click="createTicket" class="navParagraph">
                  SERVICE STATUS
                </span>
              </li>
              <li class="nav-item">
                <span @click="crtTicket = !crtTicket" class="navParagraph">
                  NEW TICKET
                </span>
              </li>
            </ul>
           <div class="float-right search">
             <div class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
               <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
             </div>
           </div>
          </div>
        </template>
      </NavbarComponent>
<!--      /////-->
      <div class="createTicket w-50 m-auto" v-if="crtTicket">
        <InputWithLabelComponent type="text" label="Line list" v-model="newTicket.lineList"></InputWithLabelComponent>
        <InputWithLabelComponent type="text" label="Uploads" v-model="newTicket.uploads"></InputWithLabelComponent>
        <InputWithLabelComponent type="text" label="Answer" v-model="newTicket.answered"></InputWithLabelComponent>

      </div>
<!--      /////////////-->
      <div v-if="ticket" class="w-100">
        <ItemsComponent v-for="item in ticketItems" :key="item.id" class="itemClass">
          <template v-slot:tBody>
            <div class="text-center itemId">{{ item.id }}</div>
            <div class="text-center itemList">{{ item.lineList }}</div>
            <div class="text-center itemUpload">{{ item.uploads }}</div>
            <div class="text-center itemAnswer" :style="item.color">{{ item.answered }}</div>
            <div class="text-center itemAnswer">{{ item.time }}</div>
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
      crtTicket: false,
      up: true,
      down: false,
      newTicket: {
        id: '',
        lineList: '',
        uploads: '',
        answered: '',
        time: '',
        color: ''
      },
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
          id: 4,
          lineList: 'Hosting 1st Line',
          uploads: 'GHow can I upload my website?',
          answered: 'Closed',
          time: '3 minutes ago',
          color: {background: '#A7A9BE'},
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
        }
      ]
    }
  },
  methods: {
    openTickets() {
      this.ticket = true
    },

    sort() {
      this.up = !this.up
      this.down = !this.down
      if (!this.up){
        this.ticketItems.sort((a, b) => (a.id > b.id) ? 1 : -1)
      }else {
        this.ticketItems.sort((a, b) => (a.id < b.id) ? 1 : -1)
      }
    },

    createTicket(){
      if (this.newTicket.lineList !== '' || this.newTicket.uploads !== '' || this.newTicket.answered !== ''){
        let i = new Date()
        this.newTicket.time = i.getDate() + ' ' + i.getMonth() + ' ' + i.getFullYear()
        let color = Math.floor(Math.random() * 1000000)
        this.newTicket.color = {background: `#${color}`}
        console.log(this.newTicket.color)
        this.newTicket.id = i.getTime()
        this.ticketItems.push( this.newTicket )
      }
        this.newTicket = []
    }
  },

}
</script>
<style scoped>
.tickets{
  margin-top: 46px;
}
.search{
  margin-left: 200px;
}
#navbarSupportedContent{
  display: flex;
  justify-content: space-evenly;
  margin: 0;
}
.itemClass{
  width: 1050px;
}
.itemId{
  width: 150px;
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
