import React from 'react'
import '../style/Login.css'
import { Link } from 'react-router-dom'
import icon from '../assets/ico2.png'

const Login = () => {
	return (
		<>
			<div className="loginmain">
				
				<div className="form-container">
				<div className="loginleft">
					<Link to='/'> <img src={icon} style={{ width: 70, height: 70 }} alt="" /></Link>
					<p className='loghead' style={{textTransform:"uppercase"}}>SIR Global Academy</p>

				</div>
					<p className="title">Login</p>
					<form className="form">
						<div class="group">
						<label for="username">Username</label>
  <input required=""  autofocus=""  type="text" class="input" />
</div>

					
						<div class="group">
						<label for="password">Password</label>
  <input required=""  autofocus=""  type="password" name="password" id="password" class="input" />
  <div className="forgot">
								<a rel="noopener noreferrer" href="#" id='link' style={{textDecoration:"none"}}>Forgot Password ?</a>
							</div>
</div>
						<button id="sign" >Sign in</button>
					</form>
					<div className="social-message">
						<div className="line"></div>
						<p className="message">Other Options</p>
						<div className="line"></div>
					</div>
					<p className="signup"> Forgot Pasword?
						<Link to="" rel="noopener noreferrer" href="#" className="" id='link' style={{textDecoration:"none"}}> Reset Password</Link>
					</p>
					<p className="signup"> Don't have an account?
						<Link to="/register" rel="noopener noreferrer" href="#" className=""  id='link' style={{textDecoration:"none"}}> Sign up</Link>
					</p>
				</div>
			</div>
		</>
	)
}

export default Login