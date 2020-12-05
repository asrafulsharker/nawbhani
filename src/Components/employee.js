import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Employee  from '../Images/employee.jpg';
export default class employee extends Component {
    render() {
        return (
            <div>
            <img style={{height:"450px", width:"100%"}} src={Employee} alt="Employee"/>
            <div className="container">
                
                    <h2 style={{textAlign:"center", borderBottom:"5px solid gray" , paddingTop:"20px", paddingBottom:"20px"}}>Employee Management System</h2>
                    <br/>
                    <h2 style={{textAlign:"center",  paddingTop:"20px", paddingBottom:"20px"}}>OVERVIEW</h2>
                    <p style={{textAlign:"center"}}>The employee management system project is based on the menu-driven program for elementary database management. It employs all the basic technique of file handling in C. It consists of following features .</p>
                <h2  style={{paddingTop:"20px", paddingBottom:"10px"}}>FEATURES</h2>
                <ul style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    <li>Writing the data in binary file</li>
                    <li>Reading the data from binary file</li>
                    <li>Modify the record</li>
                    <li>Delete the record</li>
                </ul>
                <h2  style={{paddingTop:"20px", paddingBottom:"10px"}}>Menu</h2>
                <ol style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    <li>Login</li>
                    <li>Add new</li>
                    <li>List</li>
                    <li>Exit</li>
                    <li>Modify</li>
                    <li>Search</li>
                    <li>Delete</li>
                    <li>Log out</li>
                </ol>
                </div>
                
           
        </div>
        )
    }
}
