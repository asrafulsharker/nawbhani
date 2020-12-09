import React from 'react'
import Img from '../Images/banner.jpg';
import Img2 from '../Images/employee.jpg';
import Nirob from '../Images/nirob1.png';
import Payel from '../Images/payel1.png';
import Ayan from '../Images/ayan1.png';
import Walid from '../Images/walid1.png';
import Hamza from '../Images/hamza1.png';
import Carosel from './Carosel/ImageSlider'
import { FaFacebookF, FaInstagram,FaGithub,FaLinkedinIn } from 'react-icons/fa';
import { SliderData } from './Carosel/SliderData';

function AboutUs() {
    return (
        <div >
            <Carosel slides={SliderData}/>
            <div className="container" style={{paddingBottom:"40px" ,paddingTop:"20px"}}>
              <div className="row">
                <div class="col-md-6 ">
                  <img src={Nirob} alt="nirob" style={{height:"300px" ,width:"70%",paddingBottom:"15px"}}/>
                
                </div>
                <div class="col-md-6 " >
                  <h2>Md Asraful Sharker Nirob</h2>
                  <h4>ID: 201-15-3179</h4>
                  <h4>Department of Computer Science And Engineering</h4>
                  <h4>Daffodil International University</h4>
                  <h4>Social Media</h4>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px" ,border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaFacebookF className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray"}} href="https://www.instagram.com/nirobasraful"><FaInstagram className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://github.com/asrafulnirob1376"><FaGithub className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.linkedin.com/in/asraful-sharker-nirob-0b21b71a5"><FaLinkedinIn className=''  /></a>
                </div>
              </div>
            </div>


            <div className="container" style={{paddingBottom:"40px"}}>
              <div className="row">
                <div class="col-md-6 " >
                  <img src={Payel} alt="nirob" style={{height:"300px" ,width:"70%" ,paddingBottom:"15px"}}/>
                
                </div>
                <div class="col-md-6 ">
                  <h2>Israt Jahan Payel</h2>
                  <h4>ID: 201-15-3138</h4>
                  <h4>Department of Computer Science And Engineering</h4>
                  <h4>Daffodil International University</h4>
                  <h4>Social Media</h4>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray" }} href="https://www.facebook.com/nirob.toxic"><FaFacebookF className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaInstagram className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaGithub className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaLinkedinIn className=''  /></a>
                </div>
              </div>
            </div>

            <div className="container" style={{paddingBottom:"40px"}}>
              <div className="row">
                <div class="col-md-6 ">
                  <img src={Ayan} alt="nirob" style={{height:"300px",width:"70%" ,paddingBottom:"15px"}}/>
                
                </div>
                <div class="col-md-6 ">
                  <h2>Mariyam Bin Ayan</h2>
                  <h4>ID: 201-15-3279</h4>
                  <h4>Department of Computer Science And Engineering</h4>
                  <h4>Daffodil International University</h4>
                  <h4>Social Media</h4>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray" }} href="https://www.facebook.com/nirob.toxic"><FaFacebookF className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaInstagram className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaGithub className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaLinkedinIn className=''  /></a>
                </div>
              </div>
            </div>

            <div className="container" style={{paddingBottom:"40px"}}>
              <div className="row">
                <div class="col-md-6 ">
                  <img src={Walid} alt="nirob" style={{height:"300px" ,width:"70%" ,paddingBottom:"15px"}}/>
                
                </div>
                <div class="col-md-6 ">
                  <h2>Walid Bin Sadek</h2>
                  <h4>ID: 201-15-3543</h4>
                  <h4>Department of Computer Science And Engineering</h4>
                  <h4>Daffodil International University</h4>
                  <h4>Social Media</h4>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray" }} href="https://www.facebook.com/nirob.toxic"><FaFacebookF className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaInstagram className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaGithub className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaLinkedinIn className=''  /></a>
                </div>
              </div>
            </div>

            <div className="container" style={{paddingBottom:"40px"}}>
              <div className="row">
                <div class="col-md-6 ">
                  <img src={Hamza} alt="nirob" style={{height:"300px" ,width:"70%" ,paddingBottom:"15px"}}/>
                
                </div>
                <div class="col-md-6 ">
                  <h2>Hamza Al Razi</h2>
                  <h4>ID: 201-15-3107</h4>
                  <h4>Department of Computer Science And Engineering</h4>
                  <h4>Daffodil International University</h4>
                  <h4>Social Media</h4>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px",border:"1.5px solid gray" }} href="https://www.facebook.com/nirob.toxic"><FaFacebookF className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"4px " ,border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaInstagram className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaGithub className=''  /></a>
                  <a style={{color:"white" ,backgroundColor:"black" , padding:"5px" , borderRadius:"30% " ,marginLeft:"8px",border:"1.5px solid gray"}} href="https://www.facebook.com/nirob.toxic"><FaLinkedinIn className=''  /></a>
                </div>
              </div>
            </div>

        </div>
    )
}

export default AboutUs
