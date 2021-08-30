<template>
  <div id="InputComp">
    <h1 class="main-heading">Welcome to the coffee shop</h1>
    <h3>Select order preferance</h3>
    <form>
      <div>
        <select class="DrinkType">
          <option selected>Select Drink Type</option>
          <option value="100">Strong Coffee</option>
          <option value="75">Light coffee</option>
          <option value="60">Strong Tea</option>
          <option value="50">Light Tea</option>
        </select>
      </div>
      <input
        type="number"
        class="NoOfCups"
        placeholder="Enter no. of cupes"
        autocomplete="off"
        min="1"
      />
      <div class="WithSugar" >
        <input
          
          type="checkbox"
          oninput="calculate()"
          value="5"
        />
        <label  for="WithSugar"> With Sugar </label>
      </div>
      <div class="">
        <button class="" id="PayBtn" type="button">Pay Rs. 0</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputComp",
};
</script>

<style>
#InputComp{
    display: flex;
    margin: 0 auto;
    padding: 2.5rem;
    flex-direction: column;
     width: 40%;
}
h1{
    font-size: 2.5rem;
    margin: 1rem;
}
h3{
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
.NoOfCups{
    padding-left: 3px;
}
.WithSugar{
    text-align: start;
    margin: 20px 0;
}
#PayBtn {
  color: white;
  cursor: pointer;
  background-color: rgb(63, 35, 16);
}
</style>