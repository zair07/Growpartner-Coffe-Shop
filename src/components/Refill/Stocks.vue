<template>
  <div class="stockListMain">
    <h1>Stocks Available</h1>
    <div class="stockList">
      <table>
        <tr>
          <td>Water</td>
          <td>{{ water }}</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>{{ milk }}</td>
        </tr>
        <tr>
          <td>Tea</td>
          <td>{{ tea }}</td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td>{{ coffee }}</td>
        </tr>
        <tr>
          <td>Sugar</td>
          <td>{{ sugar }}</td>
        </tr>
      </table>
    </div>
    <div class="buttonCustomDiv" v-show="isButton">
      <button class="buttonCustom" @click="refill()">
        <span v-if="isRefill"> Refill Stock </span>
        <span v-else>Refilling .....</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stocks",
  props: {
    isButton: Boolean,
  },
  data() {
    return {
      isRefill: true,
    };
  },
  methods: {
    refill() {
      this.isRefill = false;
      setTimeout(() => {
        this.isRefill = true;
      }, 2000);
      this.$alert("Stocks Refilled");
      this.$store.commit("refillShop");
    },
  },
  computed: {
    water() {
      return this.$store.state.stocks.water;
    },
    milk() {
      return this.$store.state.stocks.milk;
    },
    tea() {
      return this.$store.state.stocks.tea;
    },
    coffee() {
      return this.$store.state.stocks.coffee;
    },
    sugar() {
      return this.$store.state.stocks.sugar;
    },
  },
};
</script>

<style >
.stockListMain h1 {
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 2rem;
  text-align: center;
  color: black;
  font-weight: 700;
  font-size: 1.7rem;
}

.stockList {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 200px;
  text-align: left;
  margin-top: 2rem;
  margin-left: 1rem;
}
td {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: black;
  padding: 0.8rem;
  font-size: 1rem;
  text-align: left;
}
.buttonCustomDiv {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.buttonCustom {
  width: 170px;
  height: 45px;
  background-color: #502507;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
@media (max-width: 768px) {
  .stockListMain {
    padding: 2rem;
  }
  table {
    margin-left: 0;
  }
  h1 {
    padding-top: 1rem;
  }
}
</style>