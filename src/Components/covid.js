import React from 'react'
import Covid from '../Images/covid.png';
function covid() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img style={{height:"300px",padding:"20px",paddingTop:"50px"}} src={Covid} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>Covid-19 Tracker</h2>
                   <br/>
                   <p>Corona Virus is, unfortunately, spreading through the entire world. What can we, as developers, do to make the situation better? We can help to spread awareness by visualizing the data. The data is fetched from the API and we'll create cards displaying the statistics as well as Charts. This project/application is created using the most modern JavaScript syntax. Along the way, you'll learn how to use Material UI, Charts.js, React Hooks, API data fetching, all of it in React JS!</p>
                   <br/>
                   <p>The project is going to fetch the live data from the API using Async/Await syntax. In this video, we also use React Hooks! By the end of this video, you will have a strong understanding of React's workflow; including data fetching, hooks, folder structure, and more.</p>
                </div>
            </div>
            <button className="btn btn-primary" style={{color:"black " , margin:"50px"}}><a href="https://covid-19-tracker-by-nirob.netlify.app/">Track Live</a></button>
        </div>
    )
}

export default covid;
