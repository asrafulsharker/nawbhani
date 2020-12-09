import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Employee  from '../Images/employee.jpg';
import Login from '../Images/login.png';
import Option from '../Images/option.png';
import Add from '../Images/add.png';
import List from '../Images/list.png';
import Modify from '../Images/Modify.png';
import Delete from '../Images/delete.png';
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

                <div className="row">
                <div className="col-md-6">
                <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Login From</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={Login} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Options</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={Option} alt=".."/>

                   
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Add Employee Record</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={Add} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Employee List</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={List} alt=".."/>

                   
                </div>
            </div>


            
            <div className="row">
                <div className="col-md-6">
                <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Modify Record</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={Modify} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Delete Record</h2>
                   <br/>
                   <img style={{height:"400px",width:"100%",padding:"20px"}} src={Delete} alt=".."/>

                   
                </div>
            </div>
                </div>
                
           
        </div>
        )
    }
}
