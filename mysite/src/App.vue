<template>
  <div id="app">
    <div class="container-fluid">
      <site-header></site-header>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import 'animate.css'



export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
    padding-right:0 !important;
    padding-left:0 !important;
 }
</style>
