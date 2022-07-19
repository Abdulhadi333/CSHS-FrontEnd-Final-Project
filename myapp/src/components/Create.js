import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const navigate =useNavigate();
    const [vulnerability, setVulnerability]=useState("");
    const [discription, setDescription]=useState("");
    const [opreatingSystem, setOpreatingSystem]=useState("");
    const [date, setDate]=useState();
// get the data from Create....
    const postData = () => {
        axios
          .post(`https://62d3e4085112e98e4846e3f0.mockapi.io/CyberProject`, {
            vulnerability,
            discription,
            opreatingSystem,
            date

          })
          .then((res) => {
            console.log(res);
            navigate("/List");
          })
          .catch((err) => {
            console.log(err);
          });
      };

      

  return (
    <div>
         <div className='create'>
      <h4>Create </h4>
        <input placeholder='nameOfVulnerability' onChange={(e)=>{setVulnerability(e.target.value);}}></input>
        <br></br>
        <h6>Discription</h6>
        <textarea name="paragraph_text" cols="50" rows="10" onChange={(e)=>{setDescription(e.target.value);}}></textarea>
        <br/>
        <h6>Operating System </h6>
        <select id="cars" name="cars" onChange={(e)=>{setOpreatingSystem(e.target.value);}}>
    <option value="Windows">Windows</option>
    <option value="Linux">Linux</option>
    <option value="Mac">Mac</option>
    <option value="ubuntu">ubuntu</option>
  </select>
        <br></br>
        <h6>Created on</h6>
        <input type='date'  onChange={(e)=>{setDate(e.target.value);}}></input>
        <br></br>
        <br/>
        <button className='btn btn-success' onClick={postData} > Add</button>
    </div>
    </div>
  )
}
