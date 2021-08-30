<template>
  <div class="home">
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
