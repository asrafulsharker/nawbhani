import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import ourProject from './Components/ourProject';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/our-project" component ={ourProject}/>
      </Switch>
    </>
  );
}

export default App;
