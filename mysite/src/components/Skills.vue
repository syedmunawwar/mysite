<template>
  <div class="container">
    <div class="d-flex align-content-start flex-wrap">
            <div class="p-4 text-left animate__animated animate__slideInUp">
                <h4>Programming Languages</h4>
                <ul>
                    <li>Vue.js</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>HTML5</li>
                    <li>CSS </li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div class="p-4 text-left animate__animated animate__slideInUp">
                    <h4>Operating Systems</h4>
                    <ul>
                        <li>Linux </li>
                        <li>Windows</li>
                    </ul>
                </div>
        <div class="p-4 text-left animate__animated animate__slideInUp">
            <h4>Software and Utilities</h4>
            <ul>
                <li>Visual Studio</li>
                <li>VS Code</li>
                <li>VSTS</li>
                <li>SQL</li>
                <li>MATLAB</li>
                <li>Weka</li>
                <li>Android Studio </li>
                <li>GIT</li>
                <li>OpenCV</li>
            </ul>
        </div>
        <div class="p-4 text-left animate__animated animate__slideInUp">
            <h4>Databases</h4>
            <ul>
                <li>MySQL</li>
                <li>mongoDB</li>
                <li>Couch Base</li>
            </ul>
        </div>
    </div>
    <br>
    <div class="d-flex justify-content-center p-5"> <vue-typer text='Stay hungry stay foolish' caret-animation='smooth'  :pre-erase-delay='5000'></vue-typer></div>
    <div class="d-flex justify-content-center p-4">
    <fingerprint-spinner :animation-duration="3000" :size="100" color="#000000"/>
    </div> 
  </div>
</template>

<script>
import { FingerprintSpinner  } from 'epic-spinners'

export default {
    name : 'Skills',
    components: {
      FingerprintSpinner 
    }
}
</script>

<style>

</style>