import { getTodosUsuarios } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Nav from "../../components/Nav/Nav";

const UserAdmin = ({user}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, []);
  
  return (
    <div>        
        <div>
          <h1>RENDERIZAR EL DASHBOARD</h1>
          <Link to="create">
            <button> Create User, SUP, Cohort </button>
          </Link>
          <Link to="/update">
            <button> Update USER info </button>
          </Link>
        </div>
    
    </div>
  );
};

export default UserAdmin;
