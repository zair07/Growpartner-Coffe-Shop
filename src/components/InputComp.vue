<template>
  <div id="InputComp">
    <h1 class="main-heading">Welcome to the coffee shop</h1>
    <h3>Select order preferance</h3>
    <form>
      <div>
        <select class="DrinkType" v-model="DrinkType">
          <option selected>Select Drink Type</option>
          <option value="100">Strong Coffee</option>
          <option value="75">Light coffee</option>
          <option value="60">Strong Tea</option>
          <option value="50">Light Tea</option>
        </select>
      </div>
      <input
        v-model="Cups"
        onChange="this.Calculate"
        type="number"
        class="NoOfCups"
        placeholder="Enter no. of cupes"
        autocomplete="off"
        min="1"
      />
      <div class="WithSugar">
        <input type="checkbox" value="5" v-model="sugar" />
        <label for="WithSugar"> With Sugar </label>
      </div>
      <div>
        <button
          id="PayBtn"
          type="button"
          v-if="DrinkType == 'Select Drink Type'"
        >
          Pay Rs.0
        </button>
        <button id="PayBtn" type="button" v-else v-on:click="Calculate">
          Pay Rs.{{ amountComputed }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputComp",
  data() {
    return {
      DrinkType: "Select Drink Type",
      Cups: 0,
      currStocks: undefined,
      obj: { num: 0 },
      amount: 0,
      sugarAmt: 0,
      sugar: false,
      Ingrigent: [
        { m: 10, c: 8, w: 4, t: 0 },
        { m: 15, c: 4, w: 4, t: 0 },
        { m: 10, c: 0, w: 8, t: 8 },
        { m: 15, c: 0, w: 4, t: 4 },
      ],
    };
  },
  computed: {
    amountComputed: function () {
      let valSugar = 0;
      if (this.sugar) valSugar = 5;
      let val =
        parseInt(this.Cups) * (parseInt(this.DrinkType) + parseInt(valSugar));
      if (val < 0) {
        this.$alert("No negative Cups :)");
        return 0;
      } else if (isNaN(val)) {
        return 0;
      } else return val;
    },
  },
  methods: {
    Calculate() {
      console.log(this.sugar);

      if (this.Cups > 0) {
        this.obj = { num: this.Cups };
        this.sugarAmt = 5 * this.Cups;

        if (!this.isOutOfStock()) {
          if (this.DrinkType == 100) {
            this.$store.commit("strongCoffee", this.obj);
            console.log("strongCoffee is Ready");
          } else if (this.DrinkType == 75) {
            this.$store.commit("lightCoffee", this.obj);
            console.log("lightCoffee is Ready");
          } else if (this.DrinkType == 60) {
            this.$store.commit("strongTea", this.obj);
            console.log("strongTea is Ready");
          } else {
            this.$store.commit("lightTea", this.obj);
            console.log("lightTea is Ready");
          }
          if (this.sugar && this.currStocks.sugar - 5 * this.Cups > 0) {
            this.$store.commit("sugar", { num: this.sugarAmt });
          }
        this.$alert("Yours Drink Is Ready");
        }
        
        this.sugar = false;
        this.DrinkType = "Select Drink Type";
        this.Cups = null;
      } else {
        this.$alert("Please Enter Valid Number Of Cups");
      }
    },

    isOutOfStock() {
      this.currStocks = this.$store.state.stocks;

      if (this.DrinkType == 100) {
        if (
          this.currStocks.milk - this.Ingrigent[0].m * this.Cups < 0 ||
          this.currStocks.coffee - this.Ingrigent[0].c * this.Cups < 0 ||
          this.currStocks.water - this.Ingrigent[0].w * this.Cups < 0
        ) {
          this.$alert("Ingridents Of StrongCoffee Goes Outoff Stock");

          return true;
        }
      } else if (this.DrinkType == 75) {
        if (
          this.currStocks.milk - this.Ingrigent[1].m * this.Cups < 0 ||
          this.currStocks.coffee - this.Ingrigent[1].c * this.Cups < 0 ||
          this.currStocks.water - this.Ingrigent[1].w * this.Cups < 0
        ) {
          this.$alert("Ingridents Of LightCoffee Goes Outoff Stock");

          return true;
        }
      } else if (this.DrinkType == 60) {
        if (
          this.currStocks.milk - this.Ingrigent[2].m * this.Cups < 0 ||
          this.currStocks.tea - this.Ingrigent[2].t * this.Cups < 0 ||
          this.currStocks.water - this.Ingrigent[2].w * this.Cups < 0
        ) {
          this.$alert("Ingridents Of StrongTea Goes Outoff Stock");

          return true;
        }
      } else if (this.DrinkType == 50) {
        if (
          this.currStocks.milk - this.Ingrigent[3].m * this.Cups < 0 ||
          this.currStocks.tea - this.Ingrigent[3].t * this.Cups < 0 ||
          this.currStocks.water - this.Ingrigent[3].w * this.Cups < 0
        ) {
          this.$alert("Ingridents Of LightTea Goes Outoff Stock");

          return true;
        }
      }
      if (this.sugar && this.currStocks.sugar - 5 * this.Cups < 0) {
        this.$alert("Sugar Goes Outoff Stock");
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
#InputComp {
  /* display: flex; */
  margin: 0 auto;
  padding: 2.5rem;
  flex-direction: column;
  width: 40%;
}
h1 {
  font-size: 2.5rem;
  margin: 1rem;
}
h3 {
  font-size: 1.75em;
}
.DrinkType,
.NoOfCups,
#PayBtn {
  padding: 0;
  background-color: rgb(239, 239, 239);
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem auto;
  height: 40px;
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
.NoOfCups {
  padding-left: 3px;
}
.WithSugar {
  text-align: start;
  margin: 20px 0;
}
#PayBtn {
  color: white;
  cursor: pointer;
  background-color: rgb(63, 35, 16);
}
.main-heading {
  margin-top: 2rem;
}
@media screen and (max-width: 770px) {
  #InputComp {
    padding: 10px;
    width: 90%;
  }
}
@media screen and (min-width: 770px) {
  #InputComp {
    width: 40%;
  }
}
</style>