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
  // console.log(user, "USER")
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
  // const userValidate = users.find((e) => e.name === user.displayName);
  
  if (!user.category) {
    // dispatch(getTodosUsuarios());
		// 
		const userValidate = users.find((e) => e.email === user.emails[0].value  );
    active = userValidate && userValidate.active;
    console.log(userValidate);
    category = userValidate && userValidate.category;
  }else{
    category = user.category;
    console.log(category);
      active = user.active;
			// console.log(category);
	}
// && active === true
  return (
    <div>
      {category === "admin" && active === true ? (
        <Admin user={user} />
      ) : category === "student" && active === true? (
        <Students user={user} />
      ) : category === "ta" && active === true? (
        <Ta user={user} />
      ) : category === "teacher" && active === true? (
        <Teachers user={user} />
      ) : null}
    </div>
  );
};
export default Profile;