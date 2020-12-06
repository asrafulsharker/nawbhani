import React from 'react'
import AiNews from '../Images/Ai-news.png';
function aiNews() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img style={{height:"300px",width:"100%",padding:"20px",paddingTop:"50px"}} src={AiNews} alt=".."/>
                    
                </div>
                <div className="col-md-6">
                   <h2 style={{paddingTop:"50px",borderBottom:"4px solid gray", textAlign:"center" ,paddingBottom:"5px"}}>AI Online News</h2>
                   <br/>
                   <p> AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications. It allows you to control absolutely everything in the app using your voice. Another huge benefit is that it's extremely easy to integrate it. We'll do it together in this video and afterward, you'll be able to create your own voice-controlled apps.  
</p>
                   <br/>
                   <p>The project is going to fetch the live data from the API using Async/Await syntax. In this video, we also use React Hooks! By the end of this video, you will have a strong understanding of React's workflow; including data fetching, hooks, folder structure, and more.</p>
                </div>
            </div>
            <button className="btn btn-primary" style={{color:"black " , margin:"50px"}}><a href="https://covid-19-tracker-by-nirob.netlify.app/">Watch Live</a></button>
        </div>
    )
}

export default aiNews;
