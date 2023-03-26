import React, { Component,useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import {Link} from "react-router-dom";
function Homepage()  {
      return (
        <>
            <Link to="/registercourse">
            <button >Add Course</button>
            </Link>
            <Link to="/addcoursemarks">
            <button >Add Course Marks</button>
            </Link>
            <Link to="/testing">
              <button>Testing</button>
            </Link>
        </>        
     );
    
  }
  export default Homepage;