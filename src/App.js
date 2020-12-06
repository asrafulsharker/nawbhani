import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import ourProject from './Components/ourProject';
import Employee from './Components/employee';
import Covid from './Components/covid';
import aiNews from './Components/aiNews';
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
        <Route exact path="/covid-19-tracker" component ={Covid}/>
        <Route exact path="/ai-news" component ={aiNews}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
