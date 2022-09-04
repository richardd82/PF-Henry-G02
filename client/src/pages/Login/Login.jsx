import React from 'react'
import Google from '../../assets/google.png';
import Facebook from '../../assets/facebook.png';
import GitHub from '../../assets/github.png';
import './login.css'

const Login = () => {

const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
}
const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
}
const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
}

    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className='icon' />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className='icon' />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={GitHub} alt="" className='icon' />
                        GitHub
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='UserName' />
                    <input type="password" placeholder='Password' />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login