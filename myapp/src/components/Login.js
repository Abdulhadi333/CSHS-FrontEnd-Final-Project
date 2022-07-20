import React, { useRef, useState } from 'react'
import Home2 from './Home2'
import './home.css';


export default function Login() {

 
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
const handleSubmit =()=>{
    if(email.current.value=="user1@gmail.com" && password.current.value=="12345"){
    localStorage.setItem("emailData","user1@gmail.com")
    localStorage.setItem("passwordData","12345")}
    else if(email.current.value=="user2@gmail.com" && password.current.value=="12345"){
        localStorage.setItem("emailData","user2@gmail.com")
    localStorage.setItem("passwordData","12345")}
    else if(email.current.value=="user3@gmail.com" && password.current.value=="12345"){
        localStorage.setItem("emailData","user3@gmail.com")
    localStorage.setItem("passwordData","12345")}
    else{
        console.log("Please SignUp");
    }

}


  return (
    <div>



        {
        getEmail &&getPassword? <Home2/>:
        <form className='loginForm'  onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" className='form-control' placeholder='email' ref={email}/>
        <br />
        <input type="password" className='form-control' placeholder='password' ref={password}/>
        <br />
        <button className='btn btn-primary' >Send</button>
        </form>

        } 



    </div>
  )
}