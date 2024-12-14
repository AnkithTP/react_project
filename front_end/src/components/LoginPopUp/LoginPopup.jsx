import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import {useState} from 'react'

const LoginPopup = ({setShowLogin}) => {
    const [curState,setState]=useState('signup')
  return (
    <div className="login-popup">
    <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{curState ==='signup'? 'SignUp':'LogIn'}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-inputs">
            {curState==='signup'&& <input type='text' placeholder='your name' required/>}
            <input type='email' placeholder='E-mail' required/>
            <input type='password' placeholder='your password' required/>

        </div>
        <button>{curState==='signUp'? 'Sign Up' : 'Log In'}</button>
        <div className="login-popup-condition">
        <input type='checkbox'/>
        <p>By Continuing I agree your Terms and Conditions</p>
        </div>
        {
            curState==='signup'
            ?<p>Already have an account?<span onClick={()=>setState('login')}>Login</span></p>
            :<p>Create new account?<span onClick={()=>setState('signup')}>Click here</span></p>
        }
    </form>
    </div>
  )
}

export default LoginPopup