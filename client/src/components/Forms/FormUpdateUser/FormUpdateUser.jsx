import React, { useEffect } from "react";
import { getTodosUsuarios } from "../../../redux/actions/userAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  return (
    <>
      <div>
        <div>
          <div>
            ID:
            {updateUser.users.map((e) => (
              <>
                <div>{e.id}</div>
                <Link to={e.id}>
                  <button>Update</button>
                </Link>
              </>
            ))}
            EMAIL:
            {updateUser.users.map((e) => (
              <div>{e.email}</div>
            ))}
            NAME:
            {updateUser.users.map((e) => (
              <div>{`${e.name} ${e.lastname}`}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
