import React from 'react'
import "./CSS/LoginSignUp.css"

function LoginSignup() {
  return (
    <div className='loginSignUp'>
      <div className="loginSignup-conatiner">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='password' />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox"  id='' name=''/>
          <p>i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup