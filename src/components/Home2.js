import React, { useState,useEffect } from 'react'
import './home2.css';
import {Col,Container,Row,Card,Button} from 'react-bootstrap';
import Profile from './Profile';
import Certifi from './Certifi';


export default function Home2() {



  const [showComponent , setShowComponent] = useState(true);

    // function for Logout
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
}


  return (
    <div>
       
        <div className='cardtile'>
        <div class="cards">
  <div class="card content">
    <div class="card-content">
      <div class="card-img">
        {/* <img onClick={<Profile/>} src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/06/iStock-1194430861-1-2.jpeg" alt=""/> */}
        <a href="./Profile"><img class="alignnone size-full wp-image-1303" src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/06/iStock-1194430861-1-2.jpeg" alt=""  /></a>

      </div>
      <div class="card-label">Cybersecurity Specialist</div>
      <div class="card-title">
      A cybersecurity specialist uses their technology expertise and training to ensure that an organization's sensitive data remains secure from both internal and external threats, including cyber crime and unauthorized use
              </div>
    </div>
  </div>
  <div class="card content bg-dark">
    <div class="card-content bg-dark">
      <div class="card-img bg-dark">
        {/* <img src="https://i.itworldcanada.com/wp-content/uploads/2019/11/GettyImages-1128503636-2.jpg" alt="keyboard"/> */}
        <a href="./List"><img class="alignnone size-full wp-image-1303" src="https://i.itworldcanada.com/wp-content/uploads/2019/11/GettyImages-1128503636-2.jpg" alt=""  /></a>

      </div>
      <div class="card-label">
        vulnerabilities
      </div>
      <div class="card-title">
      </div>
    </div>
  </div>
  <div class="card content">
    <div class="card-content">
      <div class="card-img">
        <a href="./Certifi"><img class="alignnone size-full wp-image-1303" src="https://images.idgesg.net/images/article/2019/02/certificate_certification_by_svetazi_gettyimages-655331082_2400x1600-100788475-large.jpg?auto=webp&quality=85,70" alt=""  /></a>

      </div>
      <div class="card-label">
      Certifications
      </div>
      <div class="card-title">
      Certifications!!!!      </div>
    </div>
  </div>
  <div class="card form">
    <div class="form-title">CSHS </div>
  </div>
</div>

</div>
<br/>
<hr/>


        <br/>
        <Button variant="info" onClick={()=> setShowComponent(true)}>Show Certifications</Button>
        <Button variant="info" onClick={()=> setShowComponent(false)}>Hide Certifications</Button>
        {showComponent && < Certifi />}



<br></br>
      

    </div>




  )
}
