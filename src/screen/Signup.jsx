import React from 'react'
import '../style/Signup.css'
import icon from '../assets/ico2.png'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
   <>
    <div className="signupmain">
    
    <div className="form-container2">
	<div className="loginleft">
<img src={icon} style={{width:100, height:100}} alt="" />
<p className='loghead' style={{textTransform:"uppercase"}}>SIR Global Academy</p>
    </div>
	<p className="title">SignUp</p>
	<form className="form">
	
       
    
		
      
    


		<div class="group">
						<label for="email">Email Address</label>
  <input required=""  autofocus=""  type="email" class="input" />
</div>
<div class="group">
						<label for="name">Full Name</label>
  <input required=""  autofocus=""  type="text" class="input" />
</div>
<div class="group">
						<label for="phone">Phone Number</label>
  <input required=""  autofocus=""  type="tel" maxLength={10} class="input" />
</div>
<div class="group">
						<label for="password">Password</label>
  <input required=""  autofocus=""  type="password" class="input" />
</div>
<div class="group">
						<label for="Password">Confirm Password</label>
  <input required=""  autofocus=""  type="password" class="input" />
</div>
<div class="group">
						<label for="referral">Referral Link</label>
  <input required=""  autofocus=""  type="text" class="input" />
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
		<Link  to="/login" rel="noopener noreferrer" href="#" className=""> Login</Link>
	</p>
</div>
    </div>
   </>
  )
}

export default Signup