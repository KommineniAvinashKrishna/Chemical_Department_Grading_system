import React,{useState} from "react";

import Login from "../login/login";
import Homepage from "../components/homepage/homepage";



function home(){
    const [status,setstatus]=useState('');
      
  if(status==="")
    return (
        <div>
           <Login onData={setstatus}/>
           
        </div>
    )
    
    else if(status==="Login Succesful")
    return(
        <div>
             <Homepage/>
             
        </div>
    )
    else{
        setstatus("");
    return(
        <>
        <h2>Invalid login</h2>
        
        </>
        
    )
    }
}
export default home;