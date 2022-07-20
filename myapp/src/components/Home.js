import React from 'react'
import './home.css';
import {Card,ListGroup,Container,Row,Col} from 'react-bootstrap';

export default function Home() {
    
     // function for Logout
     const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
     }

  return (
//     <div>
    
// <br/>

// <h1>hi</h1>



// <Container>
//       <Row>
//         <Col xs={6} md={4}>
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://cdn.acunetix.com/wp-content/uploads/2019/06/11110851/api_testing_featured.png" />
//       <Card.Body>
//         <Card.Title>Vulnerabilities</Card.Title>
//         <Card.Text>
//         A vulnerability is a hole or a weakness in the application, which can be a design flaw or an implementation bug, that allows an attacker to cause harm to the stakeholders of an application. Stakeholders include the application owner, 
//         application users, and other entities that rely on the application.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//     </Col>
//     <Col xs={6} md={4}>
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://image.cnbcfm.com/api/v1/image/107026523-ICL-OB-Photo-220303-CC-PRESS-22.jpg?v=1646684020" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
      
//     </Card>
//     </Col>

//     <Col xs={6} md={4}>
// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://storage.googleapis.com/cyberkach_posts/certs.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//     </Col>
    
// </Row>
// </Container>

// <section>
//     <img src="https://imgcdn.agendadigitale.eu/wp-content/uploads/2021/10/29110911/WIIT_banche.jpg" alt=""/>
//     <article>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </article>
//   </section>
//   </div>

<div>

<div class="wrapper">
    

    {/* <!-- Top Container --> */}
    <section class="top-container">
      <header class="showcase">
        <h1 className='fountsHome'>What is the CSHS® ?</h1>
      </header>
      <div class="top-box top-box-a">
        <h4 className='fountsHome'>CSHS®</h4>
        <p class="price" className='fountsHome'>CyberSecurity Helpline System is a nonprofit foundation that works to improve the security of software. Through community-led open-source software projects, hundreds of local chapters worldwide, tens of thousands of members, and leading educational and training conferences.</p>
      </div>
      <div >
        {/* <h4>Pro Membership</h4>
        <p class="price">$299/mo</p>
        <a href="" class="btn">Buy Now</a> */}
              <img src="https://media2.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif" width="2500" height="200" alt=""/>

      </div>
    </section>

    {/* <!-- Boxes Section --> */}
    <section class="boxes">
      <div class="box">
        <i class="fas fa-chart-pie fa-4x"></i>
        <h3 className='fountsHome'>Vulnerabilities       <img src="https://cdn-icons-png.flaticon.com/512/4337/4337928.png" width="50" alt=""/>
</h3>
        <p className='fountsHome'>define, and catalog publicly disclosed cybersecurity vulnerabilities.</p>
      </div>
      
      <div class="box">
        <i class="fas fa-globe fa-4x"></i>
        <h3 className='fountsHome'>Certifications <img src="https://cdn-icons-png.flaticon.com/512/610/610333.png" width="50" alt=""/></h3>
        <p className='fountsHome'>10 Popular Cybersecurity Certifications [2022 Updated]</p>
      </div>
      <div class="box">
        <i class="fas fa-cog fa-4x"></i>
        <h3 className='fountsHome'>community <img src="https://cdn-icons-png.flaticon.com/512/3365/3365355.png" width="50" alt=""/></h3>
        <p className='fountsHome'>Communication between people and Cybersecurity specialists.</p>
      </div>
      <div class="box">
        <i class="fas fa-users fa-4x"></i>
        <h3 className='fountsHome'>Support <img src="https://cdn-icons-png.flaticon.com/512/2706/2706950.png" width="50" alt=""/></h3>
        
      </div>
    </section>

    {/* <!-- Info Section --> */}
    <section class="info">
      <img src="https://media4.giphy.com/media/I0e4u216Qhww8eRTVq/giphy.gif?cid=ecf05e474zory8x9qim8j82v3mm5b4ajtjf8hma9d9dnbw6y&rid=giphy.gif&ct=g" width="3000" alt=""/>
      <div>
        <h2 className='fountsHome'>Your Need Sign in</h2>
        <p className='fountsHome'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
          Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
        <a href="/Login" class="btn">Learn More</a>
      </div>
    </section>



    </div>
    </div>

 
  


  )
}
