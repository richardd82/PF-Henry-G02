import React from 'react'
import Google from '../../assets/LogoGoogle.png'
import GitHub from '../../assets/github.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTodosUsuarios, usersValidate } from '../../redux/actions/index.js';
import './login.css'

const Login = () => {

const google = () => {
    window.open("https://pf-henry-g02-production.up.railway.app/auth/google", "_self");
}
const github = () => {
    window.open("https://pf-henry-g02-production.up.railway.app/auth/github", "_self");
}
const users = useSelector((state) => state.users.users);
	const dispatch = useDispatch();
	useEffect(() => {
		if(!users.length){
		dispatch(getTodosUsuarios());
		}
	  }, [dispatch]);

	const [input, setInput] = useState({
		email: "",
		password: "",
	});
	
	const user = users.find(e => e.email === input.email);
	const validated = useSelector((state) => state.userValidate);
	// console.log(validated + ' - - - SOY validated')
    
    const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input.email + '========> ONSubmit' + input.password)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user.email)
		if(user.email === input.email && user.password === input.password){
			// console.log(user, '======> SOY USER ANTES DEL ACTION');
			// navigate('/', { user: user.category });
			 dispatch(await usersValidate(user))
			// navigate('/')
			
			
		}
		else{
			console.log('Usuario no registrado')
		}
    }


    return (
        <div className ='l__login'>
            <div className ='l__side__left'>

            </div>
            <div className ='l__side__right'>
                <h1 className = 'l__side__right-title'>
                    Bienvenido a <span>Henry Students</span>
                </h1>
                <form className ='l__form' onSubmit={(e)=> handleSubmit(e)}>
                    <div className ='l__form__input-field'>
                        {/* <input type="text" required></input> */}
                        <input type="text" onChange={handleChange} value={input.email} name = "email" required/>
                        <label>Email or User Name</label>
                    </div>
                    <div className ='l__form__input-field'>
                        {/* <input className ='l__form__input-pass' type="password" required></input> */}
                        <input className ='l__form__input-pass' type="password" onChange={handleChange} value={input.password} name = "password" required/>
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
                        <div className ='l__links__google' onClick={google}>
                            <img src= {Google} /> <p>Login with Google</p>
                        </div>
                        <div className ='l__links__github' onClick={github}>
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