<template>
  <div>
    <div class="descParDiv">
      <div v-for="text in descParagraph" class="m-3">{{text}}</div>
    </div>
    <div class="cardContent">
      <div
        v-for="card in cards"
        @click="create(card.id)"
        class="cards"
      >
        <CardComponent
          :card-icon="card.icon"
          card-style="cardStiles"
          :cardId="card.id"
          :toggleId="toggleId"
        >
          <template v-slot:cardParagraph>
            <span class="cardParagraph">{{card.paragraph}}</span>
          </template>
          <template v-slot:cardText>
            <span class="cardDesc">{{card.desc}}</span>
          </template>
        </CardComponent>
      </div>
    </div>


    <div class="createContent" v-if="clickCard">
      <template>
        <SelectComponent
          v-model="form.select"
          :dates="select"
        >
          <template v-slot:selectLabel>
            <span>Service</span>
          </template>
        </SelectComponent>
        <InputWithLabelComponent type="text" v-model="form.input" label="">
          <template v-slot:inputLabel>
            <span>Subject</span>
          </template>
        </InputWithLabelComponent>
        <div>
          <span class="textarea">Message</span>
          <b-form-textarea
            id="textarea-rows"
            v-model="form.text"
            rows="6"
          ></b-form-textarea>
        </div>
      </template>
      <div class="text-center">
        <BoldParagraph>
          <span class="paragraph">We’ve found some knoweldgebase articles which may be of help:</span>
        </BoldParagraph>
      </div>
      <template>
        <ul>
          <li class="upload">How do I upload my site by ftp?</li>
          <li class="upload">How do I upload my site by ftp?</li>
          <li class="upload">How do I upload my site by ftp?</li>
        </ul>
      </template>
      <div class="button">
        <ButtonComponent>
          <span class="createTicketButton" @click="send">Create Ticket</span>
        </ButtonComponent>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "index",
  layout: 'SideBar',
  data(){
    return {
      clickCard: false,
      form: {
        select: '',
        text: '',
        input: '',
      },
      select: [
        {id: 1, name: 'Option A'},
        {id: 2, name: 'Option b'},
        {id: 3, name: 'Option c'},
        {id: 4, name: 'Option d'},
      ],
      cards: [
        { id: 1, icon: 'fa-brands fa-node-js', paragraph: 'Tech Support', desc: 'The support department is manned 24/7/365 for all techncial support queries.'},
        { id: 2, icon: 'fa-brands fa-node-js', paragraph: 'Billing', desc: 'For all biling related queries.  Manned between 9AM and 5PM Mon-Fri'},
        { id: 3, icon: 'fa-brands fa-node-js', paragraph: 'Sales', desc: 'Question about a product? Ask here.\n' + 'Manned between 9AM and 5PM Mon-Fri'},
        { id: 4, icon: 'fa-brands fa-node-js', paragraph: 'Migrations', desc: 'Request a migration of your website from another provider. 9AM - 5PM.'}
      ],
      toggleId: 0,
      descParagraph: ['TICKETS', 'KNOWLEDGEBASE', 'SERVICE STATUS']
    }
  },
  methods: {
    create(id){
      this.toggleId = id
      if (id === 1){
        this.clickCard = true
      }

    },
    async send(){
       setTimeout(async () => {
         await console.log(this.form)
       }, 1000)
      this.form.text = ''
      this.form.select = ''
      this.form.input = ''
    }
  }
}
</script>

<style scoped>
.cardContent{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cardDesc{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: #8B8C98;
  margin-top: 15px!important;
}
.cards{
  cursor: pointer;
}


.cardParagraph{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 17px;
  color: #000000;
}
.createContent{
  width: 1100px;
  height: 800px;
  background: #FFFFFF;
  margin-top: 20px;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.createTicketButton{
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.textarea{
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #8B8C98;
}
#textarea-rows{
  box-shadow: none;
  border: 1px solid silver;
}
.upload{
  width: 1054px;
  height: 44px;
  background: #EDF1FC;
  box-shadow: 0px 4px 74px rgba(167, 169, 190, 0.11);
  border-radius: 12px;
  margin: 5px;
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
ul{
  margin: 0;
  padding: 0;
}
.paragraph{
  font-size: 17px;
}
.button{
  margin: auto;
}
.descParDiv{
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}
</style>
