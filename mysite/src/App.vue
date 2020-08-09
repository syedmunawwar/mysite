<template>
  <div id="app">
    <div class="container-fluid">
      <site-header></site-header>
      <Home class="wrapper"></Home>
      <div class="container">
        <div class="row">
          <div class="col m-4">
            <vue-typer text='Hello! An inquiring mind is waiting.' pre-type-delay='5000'></vue-typer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import Home from './components/Home.vue'
import 'animate.css'

export default {
  name: 'App',
  components: {
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
