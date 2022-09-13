import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../../components/Admin/Admin";
import Nav from "../../components/Nav/Nav";
import Students from "../../components/Students/Students";
import Ta from "../../components/Ta/Ta";
import Teachers from "../../components/Teachers/Teachers";
import { getTodosUsuarios } from "../../redux/actions/index";
import jwt from "jwt-decode";

const Profile = ({ user }) => {
	// console.log(tokenDecode.category)
	const users = useSelector((state) => state.users.allUsers);
	const dispatch = useDispatch();
	// console.log(user)
	useEffect(() => {
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
	}, [dispatch]);
	///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE

	const token = localStorage.getItem("token");
	// console.log(token)
	let tokenDecode;
	if (token) {
		tokenDecode = jwt(token);
	} else {
		window.open("https://localhost:3000/login", "_self");
	}

	// dispatch(getTodosUsuarios());
	// const userValidate = users.find((e) => e.name === user.displayName);
	// const category = userValidate && userValidate.category;
	// console.log(category);
	const category = tokenDecode.category;

	return (
		<div>
			{category === "admin" ? (
				<Admin />
			) : category === "student" ? (
				<Students user={user} />
			) : category === "ta" ? (
				<Ta user={user} />
			) : category === "teacher" ? (
				<Teachers />
			) : null}
		</div>
	);
};
export default Profile;
