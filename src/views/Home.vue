<template>
  <div class="home">
    <div class="StockDiv "><Stock/></div>
    <InputComp/>
  </div>
</template>

<script>
// @ is an alias to /src

import InputComp from '@/components/InputComp.vue'
import Stock from '@/components/Refill/Stocks.vue'

export default {
  name: 'Home',
  components: {
    InputComp,Stock
  }
}
</script>

<style >
.StockDiv{
   background-color: rgb(235, 224, 193);
   height: 38.5rem;
   width: 303px;
   display: flex;
    padding: 2.5rem;
    flex-direction: column;
   
}
.home{
  display: flex;
  flex-wrap: wrap;
}
.home > * :nth-child(1){
  flex: 1 1 30%;
}
.home > * :nth-child(2){
  flex: 1 1 70%;
}
@media screen and (max-width: 770px) {
  .StockDiv {
    width: 100%;
    height: auto;
    padding-top:0 ;
    padding-bottom:0 ;
  }
  .home{
  display: flex;
  /* flex-direction: column-reverse; */
  }
  
}
  /* @media screen and (max-width: 450px) {
  .nav-links li {
    margin: 15px 5px;
  } */
</style>
