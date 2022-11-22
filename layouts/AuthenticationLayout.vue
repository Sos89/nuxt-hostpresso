<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12 order-md-1  order-sm-2 col-12 ">
        <div class="authBread">
          <HeaderComponent class="headerContent">
            <img
              src="/image/logo_dark_blue.png"
              class="img-fluid"
            >
          </HeaderComponent>
          <BreadcrumbComponent
            class="mr-5"
          />
        </div>
          <Nuxt/>
      </div>
      <div class="col-md-6 col-sm-12 order-md-2 order-sm-1 col-12 auth">
        <p class="text">Cheap Web Hosting from the UK's Leading Hosting Provide</p>
        <div class="for_image">
          <img src="/image/ilustration.png" alt="">
        </div>
      </div>

    </div>


  </div>
</template>
<style scoped>
  .auth{
    background: #eff1f1;
  }
  .text{
    margin: 135px 155px 0 135px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #191919;
  }
  .for_image{
    margin: 60px 135px 135px;
    width: 468px;
    height: 485px;
   }
  @media only screen and (max-width: 1024px) {
    .for_image {
      width: 414px;
      height: 429px;
    }
  }

  .headerContent{
    margin-left: 175px;
    margin-top: 24px;
  }

  .authBread{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

</style>
