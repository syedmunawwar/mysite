<template>
  <div class="wrapper">
    <div class="home home-header">
      <img alt="Vue logo" class="animate__animated animate__slideInUp" src="../assets/logo.svg">
    </div>
    <div class="container">
      <div class="row d-flex flex-column my-4">
        <div class="col ">
          <vue-typer text='Hi, I’m Syed!' caret-animation='smooth'  :repeat='0'></vue-typer>
        </div>
        <div class="col">
          <vue-typer text='I like code() and meeting new people.' caret-animation='smooth' :repeat='0' ></vue-typer>
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
    background-image: url(../assets/bg.webp);
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
