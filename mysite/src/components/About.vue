<template>
  <div class="container" >
    <div class="d-flex flex-column justify-content-center p-5"> 
      <div class="m-3 animate__animated "><img src="../assets/smq.jpeg" class="profile-pic" /></div>
      <div class="p-2 animate__animated animate__slideInUp "><h4 class="font-weight-bold">Syed Munawwar Quadri</h4></div>
      <div class="row animate__animated animate__slideInUp ">
        <div class="col">
            <h4>Education</h4>
            <p>Alumni of PES Institute of Technology College, Bengaluru, India. where I received my bachelor of engineering in computer science<br>
            </p>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <p>
              For more details you can drop me an <a href="mailto:syedmunawwar990@gmail.com">email</a> or connect me on social media.
          </p>
        </div>
      </div>
      <div>
        <div class="footer_social py-4">
          <a href="https://www.linkedin.com/in/syedmunawwar/" class="p-2"><img class="media-logo" src="../assets/linkedin.svg" alt="Linkedin Logo"> </a>
          <a href="https://github.com/syedmunawwar/" class="p-2"><img class="media-logo" src="../assets/github-logo.svg" alt="GitHub Logo"> </a>
          <a href="https://www.instagram.com/syedmunawwarq/" class="p-2"><img class="media-logo" src="../assets/instagram.svg" alt="Instagram Logo"> </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name : 'About'
}
</script>

<style>
.profile-pic {
   border-radius: 50%;
}
.media-logo {
  height: 40px
}
</style>