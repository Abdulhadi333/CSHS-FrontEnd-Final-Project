import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


export default function List() {

     // function for Logout
     const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
}


// get the data from Create....
const [data, setData] = useState([]);
     useEffect(() => {
       axios
         .get(`https://62d3e4085112e98e4846e3f0.mockapi.io/CyberProject`)
         .then((res) => {
           console.log(res.data);
           setData(res.data);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
 
// Update data
const setUbdate = (e) => {
  let { id, vulnerability, discription,opreatingSystem,date } = e;
  localStorage.setItem("id", id);
  localStorage.setItem("vulnerability", vulnerability);
  localStorage.setItem("discription", discription);
  localStorage.setItem("opreatingSystem", opreatingSystem);
  localStorage.setItem("date", date);

};


const getData = () => {
  axios
    .get(`https://62d3e4085112e98e4846e3f0.mockapi.io/CyberProject`)
    .then((getData) => {
      setData(getData.data);
    });
};


//delete data 
const onDelete = (id) => {
  axios
    .delete(`https://62d3e4085112e98e4846e3f0.mockapi.io/CyberProject/${id}`)
    .then(() => {
      getData();
    });
};

  return (
    <div>
         <div>
        <h1>Home Page</h1>
        <button className='btn btn-danger' onClick={handleClick}>Logout</button>

        <a href="/Login" class="badge badge-primary">Primary</a>




        <br></br>
      <table>
              <tr>
                <th>vulnerability</th>
                <th>discription</th>
                <th>opreatingSystem</th>
                <th>date</th>
                </tr>
                {data.map((e) => (
                <tr>
                
                  <td>{e.vulnerability}</td>
                  <td>{e.discription}</td>
                  <td>{e.opreatingSystem}</td>
                  <td>{e.date}</td>
                  <td><Link to="/Update">
              <button className='btn btn-success' onClick={setUbdate(e)}>Ubdate</button>
            </Link></td>
                  <td><button className='btn btn-danger' onClick={() => {onDelete(e.id);}}>X.Delete</button></td>

                  
                  </tr>
            ))}
            </table>

    </div>
    </div>
  )
}
