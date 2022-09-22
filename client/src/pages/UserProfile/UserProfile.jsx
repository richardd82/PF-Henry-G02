import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { getTodosUsuarios } from "../../redux/actions";
const {REACT_APP_SERVER_URL, REACT_APP_FRONT_URL } = process.env;

export default function UserProfile({ user }) {
    const dispatch = useDispatch()
    const handleLogout = () => {
        if (user.category) {
            localStorage.clear();
            dispatch(logout());
            window.location.reload(REACT_APP_FRONT_URL+"/login");
        } else if (user.emails) {
            window.open(REACT_APP_SERVER_URL+"/auth/logout", "_self");
        }
    };
    const logout = () => {
        window.open(REACT_APP_SERVER_URL+"/auth/logout", "_self");
    };
let userValidate = ""
let userImage = ""

  const users = useSelector((state) => state.users.allUsers);
  const saveImage = useSelector((state) => state.cloudinaryImage.image);
  console.log(saveImage, "cloudinaryImage")
  console.log(user.image, "USER.IMAGE")

  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
    if(saveImage.length && user.image !== saveImage[0]){
        window.location.reload(false)
    }
  }, [dispatch, users.length, saveImage.length, saveImage, user.image]);

  if(user.emails){
     userValidate = users.find((e) => e.email === user.emails[0].value);
     userImage = user.photos[0].value
  }
  const loginUserName = userValidate && userValidate.name;
  const loginUserEmail = userValidate && userValidate.email;
  const loginUserCategory = userValidate && userValidate.category;

  console.log(user, "ESTO ES USER EN USERPROFILE");
  return (
    <div>
      <Nav user={user} />
      <h1>Username: {loginUserName || user.name}</h1>
      <h1>Email: {loginUserEmail || user.email}</h1>
      <h1>Category: {loginUserCategory || user.category}</h1>
      {<img z-index="100000000"  height="200" width="100"  src={userImage || user.image} alt="" />}
      {user.emails === undefined ? <button><Link to="/userProfile/uploadImage">Change Image</Link></button> : ""}
      <button><Link to="/contacto">Unsubscribe</Link></button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
