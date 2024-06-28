import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowlogin}) => {

    const [curr,setcurr]=useState("Sign Up")

  return (
    <div className='login-popup'>
    
      <form  className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curr}</h2>
          <img onClick={()=>(setshowlogin(false))}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {curr==="Sign Up"?<input type="text" placeholder='Your Name' required/>:<></>}
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{curr==="Sign Up"?"Create Account":"Login "}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree all T&C Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, praesentium. </p>
        </div>
        {curr==="Sign Up"?<p>Already have an account ? < span onClick={()=>(setcurr('Login'))}>Login here</span></p>:<p>Create a new account ? <span onClick={()=>(setcurr('Sign Up'))}>Click Here</span></p>}
        {/* <p>Create a new account ? <span>Click Here</span></p>
        <p>Already have an account ? <span>Login here</span></p> */}
      </form>
    </div>
  )
}

export default Loginpopup
