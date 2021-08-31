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
      <!-- condtional render for button span -->
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
    // refill stock and settimeout for refilling loader
    refill() {
      this.isRefill = false;
      setTimeout(() => {
        this.isRefill = true;
      }, 2000);
      this.$alert("Stocks Refilled");
      this.$store.commit("refillShop");
    },
  },
  // getting all computed values of each stock item
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

<style scoped>
/* scoped css for only this component so conflicts are avoided */
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
/* table styling */
.stockList table {
  width: 200px;
  max-width: 200px;
  text-align: left;
  margin-top: 2rem;
  margin-left: 1rem;
}
table tr :nth-child(2) {
  text-align: end;
}
td {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: black;
  padding: 0.8rem;
  font-size: 1rem;
  text-align: left;
}
/* button div */
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
/* changing padding */
@media (max-width: 768px) {
  .stockListMain {
    padding: 2rem;
  }
  .stockList table {
    margin-left: 0;
  }
  .stockListMain h1 {
    padding-top: 1rem;
  }
}
</style>