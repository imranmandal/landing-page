import React , { useState } from 'react'
import { Link } from "react-router-dom";
 
function Footer() {
  return (

        <footer>
        <div className="footer-left">
            <div>
                <h3>About Wouldbee.com</h3>
                <ul>
                    <li><Link to="/"><a href="">Home</a></Link></li>
                    <li><Link to="/about"><a href="">About Us</a></Link></li>
                    <li><a href="">Blog</a></li>
                </ul>                
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li><a href="">Career</a></li>
                    <li><a href="">FAQ's</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>                
            </div>
        </div>
            
            <div>
                <h3 className="social-h3">Social Media</h3>
                <div className="social">
                    <a className="facebook" href="https://www.facebook.com/WouldBeeFB"><i className="fa fa-facebook"></i></a>
                    <a className="instagram" href="https://www.instagram.com/wouldbee_insta/"><i className="fa fa-instagram"></i></a>
                    <a className="twitter" href="https://twitter.com/WouldBee_"><i className="fa fa-twitter"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/company/74802978/admin/"><i className="fa fa-linkedin"></i></a>
                </div>
                
            </div>
            
        </footer>
        
  )
}
 
export default Footer
 