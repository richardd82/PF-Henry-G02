import React from 'react'
import Google from '../../assets/LogoGoogle.png'
import GitHub from '../../assets/github.png';
import './login.css'

const Login = () => {

const google = () => {
    window.open("https://localhost:3001/auth/google", "_self");
}
const github = () => {
    window.open("https://localhost:3001/auth/github", "_self");
}


    return (
        <div className ='l__login'>
            <div className ='l__side__left'>

            </div>
            <div className ='l__side__right'>
                <h1 className = 'l__side__right-title'>
                    Bienvenido a <span>Henry Students</span>
                </h1>
                <form className ='l__form'>
                    <div className ='l__form__input-field'>
                        <input type="text" required></input>
                        <label>Email or User Name</label>
                    </div>
                    <div className ='l__form__input-field'>
                        <input className ='l__form__input-pass' type="password" required></input>
                        <label>Password</label>
                    </div>
                    <div className ='l__form__button'>
                        <div className='inner'></div>
                        <button>Login</button>
                    </div>
                    {/* <div className ='l__text-auth'> Or Login with </div> */}
                    <div className ='l__links'> 
                    <div className ='l__text-auth'> OR </div> 
                    <hr className ='l__or-left'></hr>
                    <hr className ='l__or-right'></hr>
                        <div className ='l__links__google'>
                            <img src= {Google} /> <p>Login with Google</p>
                        </div>
                        <div className ='l__links__github'>
                            <img src= {GitHub} /> <p>Login with GitHub</p>
                        </div>
                    </div>
                </form>
            </div>
            {/* <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className='icon' />
                        Google
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
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default Login