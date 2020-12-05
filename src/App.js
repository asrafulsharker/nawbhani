import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import ourProject from './Components/ourProject';
import Employee from './Components/employee';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/our-project" component ={ourProject}/>
        <Route exact path="/employee-management" component ={Employee}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
