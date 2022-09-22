import { getTodosUsuarios } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Nav from "../../components/Nav/Nav";
import UsersStats from "../../components/Admin/Forms/UserStats/UserStats";
import "./UserAdmin.css";

const UserAdmin = ({ user }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTodosUsuarios());
	}, []);

	return (
		<>
			<div className="u__container">
				<div className="u__admim__container">
					<h3>Administrador</h3>
					<Link to="createUSER">
						<button> Create User</button>
					</Link>
					<Link to="createSUP">
						<button> Create Stand Up</button>
					</Link>
					<Link to="createCOHORT">
						<button> Create Cohort </button>
					</Link>
					<Link to="/update">
						<button> Update User Info </button>
					</Link>
					<Link to="/reviews">
						<button>Ver Reviews </button>
					</Link>
				</div>
				<div className="statsMaster">
					<UsersStats />
					<hr className="hrStats" />
				</div>
			</div>
		</>
	);
};

export default UserAdmin;
