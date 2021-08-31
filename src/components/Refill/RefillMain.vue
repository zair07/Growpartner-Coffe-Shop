<template>
  <div class="refillmain">
    <div class="stocks">
      <Stocks :isButton="true" />
    </div>
    <div class="imgRefill"></div>
  </div>
</template>

<script>
import Stocks from "./Stocks.vue";
export default {
  name: "RefillMain",
  components: {
    Stocks,
  },
};
</script>

<style >

.refillmain {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100vw;
}
.stocks {
  background-color: rgb(235, 224, 193);
  flex: 1 1 20%;
  min-width: 250px;
}
.imgRefill {
  flex: 1 1 70%;
  background-image: url("../../assets/images/coffe2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
}

@media (max-width: 768px) {
  .imgRefill {
    height: 500px;
    background-image: none;
    background-color: rgb(235, 224, 193);
  }
}

@media (max-width: 425px) {
  .imgRefill {
    background-image: none;
    background-color: rgb(235, 224, 193);
    height: 400px;
  }
}
</style>