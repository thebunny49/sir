import React from 'react'
import '../style/Login.css'
import { Link } from 'react-router-dom'
import icon from '../assets/ico2.png'
const Login = () => {
  return (
   <>
    <div className="loginmain">
    <div className="loginleft">
<Link to='/'> <img src={icon} style={{width:70, height:70}} alt="" /></Link>
<p className='loghead'>Welcome TO SIR Global Academy</p>

    </div>
    <div className="form-container">
	<p className="title">Login</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="" />
		</div>
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" />
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button className="sign">Sign in</button>
	</form>
	<div className="social-message">
		<div className="line"></div>
		<p className="message">Other Options</p>
		<div className="line"></div>
	</div>
    <p className="signup">Forgot Pasword?
		<Link to="" rel="noopener noreferrer" href="#" className="">Reset Password</Link>
	</p> 
	<p className="signup">Don't have an account?
		<Link  to="/register" rel="noopener noreferrer" href="#" className="">Sign up</Link>
	</p>
</div>
    </div>
   </>
  )
}

export default Login