import { getTodosUsuarios } from "../../redux/actions/userAdmin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const UserAdmin = () => {
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.usuarios.allUsers);
  const adminMapeado = adminUser.map((e) => e.name);
  const userRole = adminUser.map((e) => e.category);
  console.log("ESTO ME LLEGA DE USERS:", adminUser);
  // console.log(typeof userRole);
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, []);
  
  return (
    <div>
      {/* {userRole[0] == "admin" ? ( */}
        <div>
          <h1>RENDERIZAR EL DASHBOARD</h1>
          <Link to="create">
            <button> Create User, SUP, Cohort </button>
          </Link>
          <Link to="updateuser">
            <button> Update USER info </button>
          </Link>
        </div>
      {/* // ) : (
      //   <h1>No eres admin</h1>
      // )} */}
    </div>
  );
};

export default UserAdmin;
