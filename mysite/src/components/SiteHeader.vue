<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark changeText">
      <a class="navbar-brand logo-container animate__animated animate__slideInUp" href="#"><h1>S<span>MQ</span></h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse animate__animated animate__slideInRight" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PROJECT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SKILLS</a>
          </li>
        </ul>
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
  color: white;
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
