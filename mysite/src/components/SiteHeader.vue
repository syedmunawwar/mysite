<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light changeText">
      <div class="container">
        <router-link class="navbar-brand logo-container animate__animated animate__slideInUp" to="/"><h1>S<span>MQ</span></h1></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse animate__animated animate__slideInRight" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">HOME<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Portfolio">PORTFOLIO</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">SKILLS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'SiteHeader',
  }
</script>

<style>
.logo-container {
  height: 100%;
}

.logo-container h1 {
  color: black;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  font-family: 'Arial';
  font-size: 24px;
  font-weight: 100;
}

.logo-container h1 span {
  font-weight: 900;
}

</style>
