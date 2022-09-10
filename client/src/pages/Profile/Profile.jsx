import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../../components/Admin/Admin";
import Nav from "../../components/Nav/Nav";
import Students from "../../components/Students/Students";
import Ta from "../../components/Ta/Ta";
import Teachers from "../../components/Teachers/Teachers";
import { getTodosUsuarios } from "../../redux/actions/index";

const Profile = ({ user }) => {
	const users = useSelector((state) => state.users.allUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
	}, [dispatch]);
	///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
	// dispatch(getTodosUsuarios());
	const userValidate = users.find((e) => e.name === user.displayName);
	const category = userValidate && userValidate.category;
	console.log(category);

	return (
		<div>
			{category === "admin" ? (
				<Admin user={user} />
			) : category === "student" ? (
				<Students user={user} />
			) : category === "ta" ? (
				<Ta user={user} />
			) : category === "teacher" ? (
				<Teachers user={user} />
			) : (
				null
			)}            
		</div>
	);

};
export default Profile;
