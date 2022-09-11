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
          <h1>Update user</h1>
          <div>
            ID:
            {updateUser.users.map((e) => (
              <>
                <div>
                  {e.id}
                  <Link to={e.id}>
                    <button>Update</button>
                  </Link>
                </div>
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
