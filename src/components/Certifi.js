import React, { useState,useEffect } from 'react'
import './home2.css';
import {Col,Container,Row,Card,Button} from 'react-bootstrap';
import Profile from './Profile';
export default function Certifi() {


    const images = ["https://root-nation.com/wp-content/uploads/2021/03/comptia-security-01.jpg","https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/249753259/original/67065f14d2db994d1056d7c6d0269b5184fe9dc4.png","https://www.it-trainingpro.co.uk/wp-content/uploads/2021/07/cnd.jpg","https://i.ytimg.com/vi/MrJj9kRFPO0/maxresdefault.jpg","https://securiumsolutions.com/chfi/images/chfi.jpg"];
    const texti=[`	Security+ opens the door to your cybersecurity career! CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.`,`As said, there is not much of a difference between the CCNA and CCNP programs.

    The course mainly focuses on developing a few skills that include-
    
    Establishing Better Coordination: First and foremost, it teaches you to establish better coordination with the network engineers and specialists while undertaking a project. The issues are related to wireless, video and voice solutions and sorting out the advanced security problems.`,`Certified Network Defender v2 has been designed by industry experts to help IT Professionals play an active role in the Protection of digital business assets and Detection and Response to Cyber Threats, while leveraging Threat Intelligence to Predict them before they happen. CND is a network security course designed to help organizations create and deploy the most comprehensive network defense system.`,`The Certified Ethical Hacker program is the pinnacle of the most desired information security training program any information security professional will ever want to be in. To master the hacking technologies, you will need to become one, but an ethical one! The accredited course provides the advanced hacking tools and techniques used by hackers and information security professionals alike to break into an organization. As we put it, “To beat a hacker, you need to think like a hacker”.`,`This CERTIFICATION has one purpose: To differentiate the experts from the novices in Penetration Testing!

    Computer hacking forensic investigation is the process of detecting hacking attacks and properly extracting evidence to report the crime and conduct audits to prevent future attacks. Computer crime in today’s cyber world is on the rise. Computer Investigation techniques are being used by police, government, and corporate entities globally and many of them turn to EC-Council for our Digital Forensic Investigator CHFI Certification Program. `]
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
    // document.title = `main `;
    console.log("mount")
    
    return console.log("out")
    }, [console.log(`You updated ${count1+1} times`)]);
    
    

  return (
    <div>

<br/>

<section class="info1">
<h2 className='twxtinfo1'>Cyber Security Certifications in 2022</h2>

      <img className='imginfo' src={images[count1]} width="300" height="200"/>
      <div>
        <p>{texti[count1]}</p>
        <Button variant="warning" onClick={nextImage}>Next Image</Button>

      </div>
    </section>


    </div>
  )
}
