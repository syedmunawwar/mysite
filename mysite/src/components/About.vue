<template>
  <div class="container" >
    <div class="d-flex flex-column justify-content-center p-5"> 
      <div class="m-3 animate__animated animate__slideInRight"><img src="../assets/smq.jpeg" class="profile-pic" /></div>
      <div class="p-2 animate__animated animate__slideInUp "><h4 class="font-weight-bold">Syed Munawwar Quadri</h4></div>
      <div class="row animate__animated animate__slideInUp ">
        <div class="col">
            <h4>Education</h4>
            <p>Alumni of PES Institute of Technology College, Bengaluru, India. where I received my bachelor of engineering in computer science<br>
            </p>
        </div>
      </div>
      <br>
      <div class="row animate__animated animate__slideInUp ">
          <div class="col">
              <h4>Personal Details</h4>
              <ul class="text-left">
                  <li>Hobbies: <span>Swimming, Trekking and Traveling </span></li>
                  <li>Email address: <span>syedmunawwar990@gmail.com</span></li>
                  <li>Place of Birth: <span>India</span></li>
              </ul>
          </div>
      </div>
      <p>
          For more details you can drop me an email or connect me on social media.
      </p>
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
</style>