<template>
  <div class="container">
     <div class="d-flex flex-column text-left pt-5">
       <div class="cursor-pointer p-3 my-3 shadow-sm rounded animate__animated animate__slideInUp">
         <h1 class="font-weight-bold" @click="work = !work">Work Experience</h1>
       </div>
       <transition name="fade" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
        <div v-if="work"  class="pl-3">
          <div class="pt-3 ">
            <h3>Microchip Technology</h3>
            <h6>microchipDirect AN E-COMMERECE PLATFORM (Revamp Project)</h6>
            <ul>
              <li>
                Position : <span class="font-weight-bold" >Software Developer</span>
              </li>
              <li>
                Duration : <span class="font-weight-bold" >July’17 – Present</span>
              </li>
              <li>
                Place : <span class="font-weight-bold" >Bangalore, India</span>
              </li>
            </ul>
            <p>Microchip Technology Inc. is an American based firm that is a manufacturer of microcontroller, mixed-signal, analog and Flash-IP integrated circuits. It develops a wide range of microcontrollers and integrated circuits (ICs), for the hobbyist and professional markets. It sells its parts through a dedicated eCommerce website (Microchip Direct) that has a large user base across <br>
              Project Description: To convert all the pages (100+) of legacy microchip direct from MVC/ASP.Net site into a single page application for faster checkout and better user experience.<br>
              Responsibilities: Played a crucial role from the development to production.<br>
              Involved in all phases of SDLC starting from Requirements Analysis, Design, development, unit testing, and Deployment<br>
              Extensively worked on developing the project with agile methodology and quickly learned the latest technologies like Vue.js, VSTS, Bootstrap 4 and flexbox to enhance the quality of the application being built.<br>
              Technologies: C#, MVC, Vue.js, API, Bootstrap, jQuery, JavaScript, SQL and asp.net.<br>
              Software’s: Visual Studio, VS Code, VSTS and SQL</p>
              <hr class="py-2">
          </div>
          <div class="pt-3 ">
            <h3>Krumbs Inc.(Irvine, CA)</h3>
            <h6>SPOONSNAP: THE INTELLIGENT FOOD FRAMEWORK</h6>
            <ul>
              <li>
                Position : <span class="font-weight-bold" >Intern</span>
              </li>
              <li>
                Duration : <span class="font-weight-bold" >Jan ’17 – May’17</span>
              </li>
              <li>
                Place : <span class="font-weight-bold" >Bangalore, India</span>
              </li>
            </ul>
            <p>Mentored by <a ref="Dr Ramesh Jain" href="https://www.linkedin.com/in/rameshjain1"> Dr Ramesh Jain</a>, <a href="https://www.linkedin.com/in/siripenpongpaichet">Dr Siripen Pongpaichet</a> and <a href="https://in.linkedin.com/in/dinakar-sitaram-a5722a">Dr. Dinkar Sitaram</a>.<br>
              Developed a system to collect and record personal food habits using real time data. Using this information, provide personalised recommendations to users.<br>
              Personal real-time data was collected using a mobile application and various sensors like accelerometer, GPS etc. The data was efficiently stored in amazon SQS and different operations were applied to define and analyse various food habits for a particular individual<br>
              Android, Java, XML, MySQL, MongoDB, Neo4j, Node.js.</p>
              <hr class="py-2">
          </div>
          <div class="py-3 mb-5">
            <h3>University of California</h3>
            <h6>DISASTER SITUATION DETECTION AND RESCUE SYSTEM FOR ZIKA VIRUS OUTBREAK</h6>
            <ul>
              <li>
                Position : <span class="font-weight-bold" >Research Assistant</span>
              </li>
              <li>
                Duration : <span class="font-weight-bold" >May ’16 – Dec’16</span>
              </li>
              <li>
                Place : <span class="font-weight-bold" > Irvine, USA</span>
              </li>
            </ul>
            <p>Mentored by <a ref="Dr Ramesh Jain" href="https://www.linkedin.com/in/rameshjain1"> Dr Ramesh Jain</a>,<a ref="Dr Ahmed Esmin" href="https://br.linkedin.com/in/ahmed-a-a-esmin-2b309414">Dr Ahmed Esmin</a> ,<a href="https://www.linkedin.com/in/siripenpongpaichet">Dr Siripen Pongpaichet</a> and <a href="https://www.linkedin.com/in/mengfant">Dr Mengfan Tang</a>. Social Life Network Labs, Donald Bren School of Information and Computer Sciences. <br>
              Developed a fully functional framework and an Android application for zika outbreak.<br>
              Various data sources were registered, combined and operators like aggregation, grouping were applied to get overall analysis of disaster and efficient safety measures were suggested.</p>
          </div>
        </div>
        </transition>
        <div class="cursor-pointer p-3 my-3 shadow-sm rounded animate__animated animate__slideInUp">
         <h1 class="font-weight-bold " @click="paper = !paper">Publication</h1>
       </div>
       <transition name="fade" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
       <div v-if="paper"  class="pl-3">
        <div class="pt-3">
          <a href="https://ieeexplore.ieee.org/document/7732432"><h4>Minimally Supervised Sound Event Detection Using a Neural Network (2016 International Conference on Advances in Computing, Communications and Informatics, ICACCI held at LNMIIT Jaipur, India).</h4></a>
          <p><span class="font-weight-bold" >Abstract:</span>This paper proposes a sound event detection system that is trained using a minimally annotated data set of single sounds to identify and separate components of polyphonic sounds. The system uses a Feed Forward Neural Network with a single hidden layer that is pre-trained using an autoencoder. Single sounds, represented as Mel Frequency Cepstral Coefficient (MFCC) feature vectors, are used to train the neural network using back propagation. Polyphonic sounds are pre-processed using Principal Component Analysis (PCA) and Nonnegative Matrix Factorization (NMF) to obtain source separated sounds. These source separated sounds are then tested for sound classification using the feed-forward algorithm. Our system is able to achieve reasonable accuracy of source separation and detection with minimal training set. The ultimate goal of our system is to bootstrap from minimal data and learn new sounds leading to a better sound detection system.</p>
            <hr class="py-2">
        </div>
        <div class="py-3 mb-5">
          <a href="https://ieeexplore.ieee.org/document/8074107"><h4>TargetZIKA: Epidemic Situation Detection and Risk Preparedness for ZIKA Virus (2017 The 10th International Conference on Ubi-media Computing, Ubi-media held at Siam bayshore Pattaya, Thailand.).</h4></a>
          <p><span class="font-weight-bold" >Abstract:</span>We propose a framework for disaster situation modeling in smart city using micro-reporting from the most efficient and reliable sources of multimedia, people with mobile phones. By using micro-reports generated from a crowdsourced mobile phone application and EventShop to analyze all kinds of Zika related data, TargetZIKA aims to combat the spread of the Zika virus in Brazil. EventShop is an open-source platform which provides a generic infrastructure for ingesting and aggregating heterogeneous spatio-temporal data streams derived from various sources like in situ sensors and social media. By using the foremost technologies for disaster situation mapping, we develop not only a method to rate the dangerous states and locations in Brazil but also a tool for simple visualization of the smart-citizen's environment.</p>
        </div>
       </div>
       </transition>
       <div class="cursor-pointer p-3 my-3 shadow-sm rounded animate__animated animate__slideInUp">
         <h1 class="font-weight-bold " @click="project = !project">Projects</h1>
       </div>
       <transition name="fade" enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
       <div v-if="project"  class="pl-3">
        <div class="pt-3">
          <h3>MULTI-LABEL NEURAL NETWORK FOR POLYPHONIC SOUND EVENT DETECTION</h3>
          <h6>Mentored by <a href="https://in.linkedin.com/in/dinakar-sitaram-a5722a">Dr. Dinkar Sitaram</a>, Director Center for Cloud Computing and Big Data and <a href="https://in.linkedin.com/in/savitha-murthy-286a6241"> Ms. Savitha Murthy</a>, Assistant Professor, Computer Science and Engineering.</h6>
          <ul>
            <li>
              Duration : <span class="font-weight-bold" >Aug ’15 – May ‘16</span>
            </li>
            <li>
              Place : <span class="font-weight-bold" >Bangalore, India</span>
            </li>
          </ul>
          <p>Proposed a sound event detection system trained using a minimally annotated data set of single sounds to identify and separate the components of polyphonic sounds. <br>
          The system uses a Feed Forward Neural Network pre-trained using auto-encoders.<br>
          Single sounds, represented as Mel Frequency Cepstral Coefficient (MFCC) feature vectors, are used to train the neural network using back-propagation.<br>
          Polyphonic sounds are preprocessed using Principal Component Analysis and Non-negative Matrix Factorization (NMF) to obtain source separated sounds.<br>
          The source separated sounds are then tested for sound classification using the feed-forward algorithm.<br>
          The system was able to achieve a reasonable accuracy of source separation and detection with minimal training set using state of the art evaluation metric.</p>
          <hr class="py-2">
        </div>
        <div class="pt-3">
          <h3>APACHE GIRAPH DEPLOYED ON APACHE HADOOP</h3>
          <h6>Mentored by <a href="https://in.linkedin.com/in/dinakar-sitaram-a5722a">Dr. Dinkar Sitaram</a>, Director Center for Cloud Computing and Big Data and <a href="https://in.linkedin.com/in/prafullata-auradkar-23882a57"> Ms. Prafullata Auradkar</a>, Assistant Professor, Computer Science and Engineering.</h6>
          <ul>
            <li>
              Duration : <span class="font-weight-bold" >May ’15 – Aug ‘15</span>
            </li>
            <li>
              Place : <span class="font-weight-bold" >Bangalore, India</span>
            </li>
          </ul>
          <p>Deployed Apache Giraph (a graph database framework) on Apache Hadoop’s single node and multi-node cluster.<br>
          Studied the properties of Large Network Graphs from Stanford Network Analysis Platform (SNAP) and wrote a conversion algorithm to convert the format of Large Network graphs to a format accepted by Apache Giraph.<br>
          Ran Giraph jobs and tracked the job performance of master and slave nodes on server.</p>
          <hr class="py-2">
        </div>
        <div class="pt-3">
          <h3>OPERATING SYSTEMS DESIGN</h3>
          <h6>Mentored by <a href="https://in.linkedin.com/in/kalsubra"> Dr. K.V Subramaniam</a>(OS Course Project).</h6>
          <ul>
            <li>
              Duration : <span class="font-weight-bold" >AUG’15 - NOV’15</span>
            </li>
            <li>
              Place : <span class="font-weight-bold" >Bangalore, India</span>
            </li>
          </ul>
          <p>Simulation of various parts of the operating system.<br>
          Like, Simulation of Processor (for a given task), Processes and threads scheduling, Inter process communication, LRU algorithm, Disk Management (SCAN, C-SCAN, SST) and File Management.<br>
          Simulation was done in Python.</p>
          <hr class="py-2">
        </div>
        <div class="pt-3">
          <h3>OPERATING SYSTEMS DESIGN</h3>
          <h6>Mentored by <a href="https://in.linkedin.com/in/kalsubra"> Dr. K.V Subramaniam</a>(OS Course Project).</h6>
          <ul>
            <li>
              Duration : <span class="font-weight-bold" >AUG’15 - NOV’15</span>
            </li>
            <li>
              Place : <span class="font-weight-bold" >Bangalore, India</span>
            </li>
          </ul>
          <p>Simulation of various parts of the operating system.<br>
          Like, Simulation of Processor (for a given task), Processes and threads scheduling, Inter process communication, LRU algorithm, Disk Management (SCAN, C-SCAN, SST) and File Management.<br>
          Simulation was done in Python.</p>
          <hr class="py-2">
        </div>
        <div class="py-3 mb-5">
          <h3>LOSSLESS TEXT COMPRESSION USING HUFFMAN CODING</h3>
          <h6>Mentored by Prof. Srinivasa Murthy (Data Structures Course Project).</h6>
          <ul>
           <li>
              Duration : <span class="font-weight-bold" >SEP’14 - DEC’14</span>
            </li>
            <li>
              Place : <span class="font-weight-bold" > Bangalore, India</span>
            </li>
          </ul>
          <p>Implemented Huffman coding text compression algorithm in Java using Binary Search Tree, Priority queue, Doubly Linked List, Serializable, String Buffer and frontend using JavaFX <br>
          Implemented priority queue using doubly linked list and heap, and compared the efficiencies and speed of the program due to different data structure</p>
        </div>
       </div>
       </transition>
       
     </div>
  </div>
</template>

<script>
export default {
  name : 'Portfolio',
  data: function () {
    return {
      project : true,
      paper: true,
      work : true
    }
  }
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
  background-color: #f8f9fa;
}
.animate__animated.animate__fadeOutUp {
  --animate-duration: 2s;
}
</style>