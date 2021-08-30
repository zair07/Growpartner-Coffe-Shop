<template>
  <div class="refillmain">
    <div class="stocks">
      <Stocks />
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
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
.refillmain {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100vw;
  background-color: red;
}
.stocks {
  background-color: rgb(235, 224, 193);
  flex: 1 1 25%;
  min-width: 300px;
}
.imgRefill {
  flex: 1 1 75%;
  background-image: url("../../assets/images/side-image.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
}

@media (max-width: 768px) {
  .imgRefill {
    height: 500px;
  }
}

@media (max-width: 425px) {
  .imgRefill {
    height: 400px;
  }
}
</style>