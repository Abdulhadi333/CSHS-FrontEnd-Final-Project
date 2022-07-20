import React, { useEffect, useState } from 'react'
import {Navbar,Container,Button,Form,Nav,NavDropdown} from 'react-bootstrap';


export default function Header() {


  const [isLogin, setLogIn]=useState("");

  useEffect(()=>{
    if (localStorage["emailData"]){
    setLogIn(true)
  }
    else{
      setLogIn(false)
    }
  },[isLogin])



  // function for Logout
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
  }

 
  return (
    <>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
  <div className='logo'>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2592/2592258.png"
            width="70"
            height="70"
            className="d-inline-block align-top "
          />{' '}
          CyberSecurit CSHS
          </div>

  </a>
  <div className='marg'>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pricing
        </a>
      </li>
    
      
       
         
         
    
    </ul>
    
         {/* <div className='logoutNav'>
            <Button variant="outline-success">Search</Button> */}


            {
              isLogin?(
                <Button className='LLogOut' href='./Login'  variant="outline-danger" onClick={handleClick} >Logout</Button>
              ): (
                <Button className='LLogIn' href='./Login'  variant="outline-info" >Login</Button>

              )}
              
            
         {/* </div> */}
         </div>
  </div>
</nav>
  </>
  )
}
