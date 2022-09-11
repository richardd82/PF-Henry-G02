import React, { useEffect } from "react";
import { getTodosUsuarios } from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarEmail from "./SearchBarEmail";

const FormUpdateUser = () => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.users.users);
  const userMapped = updateUser.map((e) => e);
  const userId = userMapped.map((e) => e.name + " " + e.id);
  const userName = userMapped.map((e) => e.name);
  const idName = { id: ` ${userId}` };
  //   console.log("User name: ", userName);
  console.log(idName);
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);
  console.log(updateUser.map((e) => e))

  return (
    <>
      <SearchBarEmail />
      <div>
        <div>
          <div>
            {/* ID: */}
            {updateUser.map((e) => (
              <>
                <div>
                  {`NAME: ${e.name} ${e.lastname} EMAIL:  ${e.email} CATEGORY: ${e.category} ACTIVE? ${e.active} ID: ${e.id} `}
                  <Link to={e.id}>
                    <button>Update</button>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUpdateUser;
