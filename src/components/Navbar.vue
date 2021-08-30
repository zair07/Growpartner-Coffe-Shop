<template>
  <div id="navbar">
    <ul class="nav-links">
      <li>
        <router-link class="links" to="/"
          ><b>Growpartner Coffee Shop</b></router-link
        >
      </li>
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/about">About</router-link></li>
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
  margin: 20px 50px;
  list-style: none;
}
.nav-links li:nth-child(1) {
  margin-left: 10px;
}
.links {
  text-decoration: none;
  color: white;
}
.links:hover {
  color: white;
}
@media screen and (max-width: 775px) {
  .nav-links li {
    margin: 15px 1em;
  }
}
@media screen and (max-width: 450px) {
  .nav-links li {
    margin: 15px 5px;
  }
  ul {
    margin: 0;
    padding: 5px;
  }
}
</style>