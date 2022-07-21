import React, {useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Update() {
    const navigate = useNavigate();
    const [vulnerability, setVulnerability]=useState("");
    const [discription, setDescription]=useState("");
    const [opreatingSystem, setOpreatingSystem]=useState("");
    const [date, setDate]=useState();
    const [id, setId] = useState(null);

    useEffect(() => {
      setId(localStorage.getItem("id"));
      setVulnerability(localStorage.getItem("vulnerability"));
      setDescription(localStorage.getItem("discription"));
      setOpreatingSystem(localStorage.getItem("opreatingSystem"));
      setDate(localStorage.getItem("date"));
    }, []);
    const updateData = () => {
        axios
          .put(`https://62d3e4085112e98e4846e3f0.mockapi.io/CyberProject/${id}`, {
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
        <input placeholder='nameOfVulnerability' onChange={(e) => {setVulnerability(e.target.value);}}></input>
        <br></br>
        <h6>Discription</h6>
        <textarea name="paragraph_text" cols="50" rows="10" onChange={(e) => {setDescription(e.target.value);}}></textarea>
        <br/>
        <h6>Operating System </h6>
        <select id="cars" name="cars" onChange={(e) => {setOpreatingSystem(e.target.value);}}>
        <option value=".....">.....</option>
      
    <option value="Windows">Windows</option>
    <option value="Linux">Linux</option>
    <option value="Mac">Mac</option>
    <option value="ubuntu">ubuntu</option>
  </select>
        <br></br>
        <h6>Created on</h6>
        <input type='date' onChange={(e) => {setDate(e.target.value);}} ></input>
        <br></br>
        <br/>
        <button className='btn btn-success' onClick={updateData} > UPDATE</button>
    </div>
    </div>
  )
}
