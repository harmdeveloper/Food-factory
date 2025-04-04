/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <hr />
      <div className="footer-content">
        <div className="footer-content-left"> 
            <img src={assets.footer_img} alt="" className='logo' />
        {/* <p> We compromise on MONEY not on HEALTH<br />Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p> */}
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
               <a href="/"><li>Home</li></a> 
                <a href="/recipe"><li>Recipe</li></a>
                <a href="/myorders"><li>Delivery</li></a>
                <a href="/contact"><li>Contact Us</li></a>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+923135484121</li>
                <li>harmfatima046@gmail.com</li>
                <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Foodfactory.com -All Right Reserved.</p>   
      </div>
  )
}

export default Footer
