import React from 'react'
import '../style/Signup.css'
import icon from '../assets/ico2.png'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
   <>
    <div className="signupmain">
    <div className="loginleft">
<img src={icon} style={{width:100, height:100}} alt="" />
<p className='loghead'>Welcome TO SIR Global Academy</p>
<p className='logpara'>Register on SIR platform easily. <br /> World’s topmost platform to generate revenue</p>
    </div>
    <div className="form-container2">
	<p className="title">SignUp</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Email Address</label>
			<input type="text" name="email" id="email" placeholder="" />
		</div>
        <div className="input-group">
			<label for="username">Full Name</label>
			<input type="text" name="name" id="name" placeholder="" />
		</div>
        <div className="input-group">
			<label for="username">Phone Number</label>
			<input type="number" name="mobile" id="mobile" placeholder="" />
		</div>
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" />
			
		</div>
        <div className="input-group">
			<label for="password"> Confirm Password</label>
			<input type="password" name="password" id="password" placeholder="" />
			
		</div>
        <div className="input-group">
			<label for="username">Referral Link</label>
			<input type="text" name="name" id="name" placeholder="" />
		</div>
        <div class="form-check" style={{margin:"15px 0px"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  I have read and agree to the Terms and Conditions <br />of SIR Token
  </label>
</div>
		<button className="sign mb-2">Create an Account</button>
	</form>
	
  
	<p className="signup">Already have an account?
		<Link  to="/login" rel="noopener noreferrer" href="#" className="">Login</Link>
	</p>
</div>
    </div>
   </>
  )
}

export default Signup