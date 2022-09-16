import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../../components/Admin/Admin";
//import Nav from "../../components/Nav/Nav";
import Students from "../../components/Students/Students";
import Ta from "../../components/Ta/Ta";
import Teachers from "../../components/Teachers/Teachers";
import { getTodosUsuarios } from "../../redux/actions/index";
import Login from "../Login/Login";

const Profile = ({ user }) => {
  const users = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch, users.length]);
  let category = '';
  let active = false;
  ///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
  // dispatch(getTodosUsuarios());
  const userValidate = users.find((e) => e.name === user.displayName);
  
  console.log(active);
  if (!user.category) {
    // dispatch(getTodosUsuarios());
		
		const userValidate = users.find((e) => e.name === user.displayName);
     active = userValidate && userValidate.active;
		 category = userValidate && userValidate.category;
		}else{
			category = user.category;
      // active = user.active;
			// console.log(category);
	}
// && active === true
  return (
    <div>
      {category === "admin"  ? (
        <Admin user={user} />
      ) : category === "student" ? (
        <Students user={user} />
      ) : category === "ta" ? (
        <Ta user={user} />
      ) : category === "teacher" ? (
        <Teachers user={user} />
      ) : null}
    </div>
  );
};
export default Profile;
