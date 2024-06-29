import React, { useState } from 'react'
// import {assets} from './..'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const navbar = ({setshowlogin}) => {
const[menu,setMenu]=useState("menu");

  return (
    <div className='navbar'>
        <Link to={'/'}><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className='navbar-menu'>
            <a href='#menu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
            <Link to={'/'} onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact Us</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile App</a>
        </ul> 
        <div className="navbar-right">
            <img  className='searh-icon' src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to={'/cart'}><img  src={assets.basket_icon} alt="" /></Link>
                <div className={gettotalcartamt()?"dot":""}></div>
            </div>
                <button onClick={()=>setshowlogin(true)}>Sign in</button>
        </div>

    
    </div>
  )
}

export default navbar
