import { getTodosUsuarios } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Nav from "../../components/Nav/Nav";
import UsersStats from "../../components/Admin/Forms/Users Stats/activeUsers";

const UserAdmin = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, []);

  return (
    <div>
      <div>
        <h1>RENDERIZAR EL DASHBOARD</h1>
        <Link to="/createUSER">
          <button> Create User</button>
        </Link>
        <Link to="/createSUP">
          <button> Create SUP</button>
        </Link>
        <Link to="/createCOHORT">
          <button> Create Cohort </button>
        </Link>
        <Link to="/update">
          <button> Update USER info </button>
        </Link>
        <UsersStats></UsersStats>
      </div>
    </div>
  );
};

export default UserAdmin;
