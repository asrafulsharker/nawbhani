import React from 'react'
import {FaFacebookF,FaGithub,FaInstagram,FaLinkedinIn } from 'react-icons/fa';

function footer() {
    return (
        <div className="footer-container">
            <div className="container">
              <div className="row">
                  <div className="col-md-4 footer-box">
                      <h3>About us</h3>
                      <br/>
                      <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                    <p>Copyright ©2020 All rights reserved |  by NAWBHANI</p>
                  </div>
                  <div className="col-md-4 footer-box">
                      <h3>Contact Us</h3>
                      <br/>
                      <p>Stay updated with my latest trends</p>
                    <form>
                        <input type="email" name="email" placeholder="Enter email address"/>
                    </form>
                  </div>
                  <div className="col-md-4 footer-box">
                      <h3>Follow Us </h3>
                      <br/>
                      <p>Let us be social</p>
    <a href="https://www.facebook.com/Nawbhani-105302658108487"><FaFacebookF className="nav-icon"/> </a>
    <a href="https://www.facebook.com/"><FaInstagram className="nav-icon"/> </a>
    <a href="https://www.facebook.com/"><FaGithub className="nav-icon"/> </a>
    <a href="https://www.facebook.com/"><FaLinkedinIn className="nav-icon"/> </a>
                  </div>
                  
              </div>
            </div>
        </div>
    )
}

export default footer
