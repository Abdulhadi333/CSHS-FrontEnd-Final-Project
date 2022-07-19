import React from 'react'
import {Navbar,Container} from 'react-bootstrap';


export default function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <div className='logo'>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2592/2592258.png"
            width="50"
            height="50"
            className="d-inline-block align-top "
          />{' '}
          CyberSecurit CSHS
          </div>
        </Navbar.Brand>
    </Navbar>
  </>
  )
}
