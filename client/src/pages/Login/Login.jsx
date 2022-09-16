import React, { useEffect, useState } from 'react'
import Google from '../../assets/google.png';
import GitHub from '../../assets/github.png';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTodosUsuarios, usersValidate } from '../../redux/actions';

const Login = () => {

const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
}
const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
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
	// console.log(users + ' - - - SOY users')
    
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
        // console.log(input.email + '========> ONSubmit')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
		if(user.email === input.email && user.password === input.password){
			// console.log(user.category);
			// navigate('/', { user: user.category });
			dispatch(usersValidate(user))
			// navigate('/')
			window.location.reload('http://localhost:3000/');
;		}
		else{
			console.log('Usuario no registrado')
		}
    }

	return (
		<div className="login">
			<h1 className="loginTitle">Choose a Login Method</h1>
			<div className="wrapper">
				<div className="left">
					<div className="loginButton google" onClick={google}>
						<img src={Google} alt="" className="icon" />
						Google
					</div>
					<div className="loginButton github" onClick={github}>
						<img src={GitHub} alt="" className="icon" />
						GitHub
					</div>
				</div>
				<div className="center">
					<div className="line" />
					<div className="or">OR</div>
				</div>
				<div className="right">
                <form onSubmit={e => handleSubmit(e)}>
					<input type="text" placeholder="UserName" onChange={handleChange} value={input.email} name = "email" />
					<input type="password" placeholder="Password" onChange={handleChange} value={input.password} name = "password" />
					<button type='submit' className="submit">Login</button>
                </form>
				</div>
			</div>
		</div>
	);
};

export default Login;
