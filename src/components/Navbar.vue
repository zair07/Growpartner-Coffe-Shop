<template>
  <div id="navbar">
    <ul class="nav-links">
      <li>
        <router-link class="links" to="/"
          ><b>Growpartner Coffee Shop</b></router-link
        >
      </li>
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/refill-page">Refill</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


<style>
#navbar {
  background-color: #212121;

  width: 100%;
  height: 55px;
}
.nav-links {
  display: flex;
  margin: 0;
}
.nav-links li {
  margin: 15px 70px;
  list-style: none;
}
.links {
  text-decoration: none;
  color: white;
}
.links:hover {
  color: white;
}
ul {
    margin: 0;
    padding: 5px;
  }
@media screen and (max-width: 775px) {
  .nav-links li {
    margin: 15px auto;
  }
    .nav-links li:nth-child(1) {
  margin-left: 10px;
  }
}
@media screen and (max-width: 450px) {
  .nav-links li {
    margin: 15px auto;
  }
  
}
</style>