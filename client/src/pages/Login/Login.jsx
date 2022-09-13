import React, { useEffect, useState } from "react";
import Google from "../../assets/google.png";
import GitHub from "../../assets/github.png";
import { useDispatch, useSelector } from "react-redux";
import { getTodosUsuarios, logout, usersValidate } from "../../redux/actions/index";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
	const google = () => {
		window.open("https://localhost:3001/auth/google", "_self");
	};
	const github = () => {
		window.open("https://localhost:3001/auth/github", "_self");
	};
    const navigate = useNavigate();
	const users = useSelector((state) => state.users.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTodosUsuarios());
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
			navigate('/')
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
                <form onSubmit={handleSubmit}>
					<input type="text" placeholder="UserName" onChange={handleChange} value={input.email} name = "email" />
					<input type="password" placeholder="Password" onChange={handleChange} value={input.password} name = "password" />
					<button className="submit">Login</button>
                </form>
				</div>
			</div>
		</div>
	);
};

export default Login;
