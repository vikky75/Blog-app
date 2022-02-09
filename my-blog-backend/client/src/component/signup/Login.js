import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='body'>
            <div className="login-wrap">
	<div className="login-html">
		<label for="tab-2" class="tab">Sign In</label>

		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" class="input"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" ></input>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"></input>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			{/* <div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"></input>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"></input>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div> */}
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;