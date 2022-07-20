import React, { useState,useEffect } from 'react'
import './home2.css';
import {Col,Container,Row,Card,Button} from 'react-bootstrap';
import Profile from './Profile';


export default function Home2() {

    // function for Logout
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
}

const images = ["https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2022/07/log4j.png?w=780&h=408&crop=1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqPY20rpaaLTGJFPDDdPNCL1_FdxRMjmF9QOiY88FRjfG1hTQ5lUQan-Sgf3SlOeND78&usqp=CAU","https://blogs.blackberry.com/content/dam/blogs-blackberry-com/images/blogs/2018/08/Fig2-GPS-Tracker-SML.jpg  "];
const texti=[`The ‘Log4Shell’ vulnerability in open source library Log4j has reached “endemic” proportions and the aftershock could reverberate for “a decade or longer”, according to a landmark US government report.

The inaugural report by the Cyber Safety Review Board (CSRB) provided 19 recommendations for how organizations and government agencies can bolster their networks and applications against the threat.

The CSRB was established in February 2022 by the Department of Homeland Security (DHS) as mandated by a cybersecurity-focused Executive Order that was signed by President Biden a year earlier.

The public-private initiative is tasked with reviewing serious cybersecurity events and delivering strategic recommendations to government, industry, and the information security community.`,`Cybersecurity experts from across Europe have just completed one of the largest international cyber crisis simulations to date.

Cyber Europe 2022 involved more than 800 cybersecurity specialists from 29 countries in the EU and the European Free Trade Area (EFTA), as well as EU institutions and agencies.

This year’s exercise scenario involved a simulated attack on European healthcare infrastructure`,`Unpatched Bugs in 1.5 Million GPS Trackers Could Let Attackers Disrupt Vehicles Remotely
The top countries with the most users include Chile, Australia, Mexico, Ukraine, Russia, Morocco, Venezuela, Brazil, Poland, Italy, Indonesia, Uzbekistan, and South Africa.`]
const [count1 , setCount1] = useState(0);
const nextImage=()=>{
    if(count1 < images.length-1 &&count1 < texti.length-1 ){
     setCount1(count1+1)
    }
    else{
        setCount1(0)
    }
}

useEffect(() => {
document.title = `You clicked ${count1} times`;
console.log("mount")

return console.log("out")
}, [console.log(`You updated ${count1+1} times`)]);







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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsAaK9dmADJvxdUGFzWUmmfSXIjS_RLhGNg&usqp=CAU" alt="Controller"/>
      </div>
      <div class="card-label">
        Consoles
      </div>
      <div class="card-title">
        PS5 won't launch before mid-2020
      </div>
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



<section class="info1">
<h2 className='twxtinfo1'>Your Need Sign in</h2>

      <img className='imginfo' src={images[count1]} width="300" height="200"/>
      <div>
        <p>{texti[count1]}</p>
        <Button variant="warning" onClick={nextImage}>Next Image</Button>

      </div>
    </section>




<br></br>
      

    </div>




  )
}
