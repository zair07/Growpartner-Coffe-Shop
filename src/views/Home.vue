<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <InputComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import InputComp from '@/components/InputComp.vue'

export default {
  name: 'Home',
  components: {
    InputComp
  }
}
</script>
