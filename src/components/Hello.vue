<template>
  <div class="hello">
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from '@/components/nav'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'v-nav': nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
