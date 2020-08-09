<template>
  <div id="app">
    <div class="container-fluid">
      <site-header></site-header>
      <Home class="wrapper"></Home>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/SiteHeader.vue'
import Home from './components/Home.vue'
import 'animate.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SiteHeader,
    Home
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
}
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
