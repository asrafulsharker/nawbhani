import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import projectBanner from '../Images/project-banner.png';
import employeeImg from '../Images/employee.jpg';
import covid from '../Images/covid.png';
import AiNews from '../Images/Ai-news.png';
export default class ourProject extends Component {
    render() {
        return (
           <div>
                <img className="project-banner" src={projectBanner} />
                <div className="container ourProject-topic">



 
               <div className="card-deck card-box">
                   
                   <div className="card ">
                   <Link to="/employee-management">
    <img src={employeeImg} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title">Employee Management</h5>
      <p className="card-text">The employee management system project is based on the menu-driven program for elementary database management. It employs all the basic technique of file handling in C. It consists of following features .</p>
      
    </div>
    </Link>
  </div>
                  

  <div className="card ">
                   <Link to="/rooms">
    <img src={covid} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title">Covid-19 Tracker</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    </Link>
  </div>
  <div className="card " >
                   <Link to="/rooms">
    <img src={AiNews} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 class="card-title">AI Online News</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
    </div>
    </Link>
  </div>
  
  </div>
  </div>
</div>

    
        

           
        )
    }
}
