import React , { useState } from 'react'
import Navbar from './Navbar'








import logo from '../Images/wouldbee.mp4'



 
function Header() {
  return (
    <div className="header" >
        <Navbar/>
        <div className="header-content">
        
            <h1>Matrimony that's really free</h1>
            <p>Pre-launch offer: register today for lifetime unrestricted access</p>
            <div className="download-btn">
              <a className="download" href="">
              <span>Download App</span>
                
              <img src="https://img.icons8.com/material-rounded/24/000000/google-play.png"/>
              </a>
            </div>
            
            
            
        </div>
        
    </div>
  )
}
 
export default Header
 