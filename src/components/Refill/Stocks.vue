<template>
  <div class="stockListMain">
    <h1>Stocks Available</h1>
    <div class="stockList">
      <table>
        <tr>
          <td>Milk</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>1000</td>
        </tr>
      </table>
    </div>
    <div class="buttonCustomDiv">
      <button class="buttonCustom">Refill Stock</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stocks",
  data() {
    return {};
  },
};
</script>

<style >
h1 {
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 2rem;
  text-align: center;
}

.stockList {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 300px;
  text-align: center;
  margin-top: 2rem;
  margin-left: 0.5rem;
}
td {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: black;
  padding: 0.5rem;
}
.buttonCustomDiv {
  text-align: center;
  margin-top: 1rem;
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
  h1 {
    padding-top: 1rem;
  }
  td {
    text-align: center;
  }
}
</style>