import './App.css';

import React, { Component,useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from "./login/login";
import Home from "./home/home";
import Homepage from './components/homepage/homepage';
import Registercourse from './components/registercourse/registercourse'
import Testing from './components/testing/testing';

class App extends Component {

  
  render() {
    return (
      <>
          <Router>
           <div className="App">
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/home' element={< Homepage />}></Route>
                 <Route exact path='/registercourse' element={< Registercourse />}></Route>
                 <Route exact path='/testing' element={< Testing />}></Route>

           </Routes>
          </div>
          </Router>
          
      </>
      
   );
  }
}
export default App;
