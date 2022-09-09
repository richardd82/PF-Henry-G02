import React, { useEffect } from "react";
import { getTodosUsuarios } from "../../../redux/actions/userAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./UpdateOptions.css";

const UpdateOptions = () => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.usuarios);
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  return (
    <div>
      {updateUser.users.map((e) => {
        if (window.location.pathname === `/updateuser/${e.id}`) {
          return (
            <div>
              <div>
                <div>
                  {" "}
                  Nombre
                  <div>
                    {e.name} {e.lastname}
                  </div>
                </div>

                <div>
                  {" "}
                  Email<div> {e.email}</div>
                </div>
                <div>
                  Category<div>{e.category}</div>
                </div>
                <div>
                  Is active?
                  <div>
                    {" "}
                    {e.active.toString() === "true"
                      ? e.active.toString().replace("true", "active")
                      : e.active.toString().replace("false", "inactive")}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default UpdateOptions;
