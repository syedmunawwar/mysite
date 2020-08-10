<template>
  <div class="wrapper">
    <div class="home home-header">
      <img alt="Vue logo" class="animate__animated animate__slideInUp" src="../assets/logo.png">
    </div>
    <div class="container">
      <div class="row">
        <div class="col m-4">
          <vue-typer text='Hi, I’m Syed! I like code() and meeting new people.' caret-animation='smooth'  :pre-erase-delay='5000'></vue-typer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
  }
</script>

<style css-scoped>
.wrapper {
  height: 100vh !important;
}
.home {
    background-image: url(../assets/bg.jpg);
    background-attachment: center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    opacity: .83;
}
.animate__animatedanimate__slideInUp {
  --animate-duration: 2s;
}

</style>
