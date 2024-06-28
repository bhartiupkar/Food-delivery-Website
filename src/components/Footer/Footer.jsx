import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                        fuga debitis vitae facilis quas ducimus ipsa nemo? Velit necessitatibus,
                        .footer-scial eius esse nesciunt nobis ducimus in voluptate dolorem?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+ 0321-232-1212</li>
                        <li>toamtar@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>Copyright 4hsi agh xyfg</p>
        </div>
    )
}

export default Footer
