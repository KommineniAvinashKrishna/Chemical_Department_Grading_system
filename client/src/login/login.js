import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

function Logintouser  (props) {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const [ress,setress]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const response="";
       

          axios
        .post(`http://localhost:4000/login`,{username,password})
        .then(res=>{
          console.log(res)
          props.onData(res.data)
          console.log(username);
          console.log(password);

        })
        .catch(err=>{
          console.log(err)
          
      
      
        })
         

    };
  
  return (
    <div>
    <form style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
    }}
    onSubmit={handleSubmit}
    
    >
        <label htmlFor="username">UserName</label>
        <input
        type="text"
        id="username"
        name="username"
        placeholder="Your Name ..."
        value={username}
        onChange={e =>setusername(e.target.value)}
        />
               <br></br>
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        name="password"
        //placeholder="Your email ..."
        value={password}
        onChange={e =>setpassword(e.target.value)}
        />
        <br></br>
        <input type="submit" value="Login"/>
        </form>
      
        </div>
  );

};

export default Logintouser;