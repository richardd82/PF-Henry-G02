import React, { useEffect, useState } from "react";
import { getTodosUsuarios, putUser } from "../../../redux/actions/userAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./UpdateOptions.css";

const UpdateOptions = () => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: updateUser.users.name,
    lastname: updateUser.users.lastname,
    active: updateUser.users.active,
    category: updateUser.users.category,
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(putUser(id, input));
    alert("User Update");
    setInput({
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      active: input.active,
      category: input.category,
    });
  };

  return (
    <div>
      {updateUser.users.map((e) => {
        if (window.location.pathname === `/adashboard/updateuser/${e.id}`) {
          return (
            <div>
              <div>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  autoComplete="off"
                >
                  <div>
                    {" "}
                    <label>Name</label>
                    <input
                      placeholder={`${e.name}`}
                      name="name"
                      required
                      defaultValue={e.name}
                      value={input.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    {/* {errors.name && <h1>{errors.name}</h1>} */}
                    <label>Lastname</label>
                    <input
                      placeholder={`${e.lastname}`}
                      name="lastname"
                      defaultValue={e.lastname}
                      required
                      value={input.lastname}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <label>E-mail</label>
                    <input
                      placeholder={`${e.email}`}
                      name="email"
                      defaultValue={e.email}
                      required
                      value={e.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <label>Category</label>
                    <input
                      placeholder={`${e.category}`}
                      name="category"
                      defaultValue={e.category}
                      required
                      value={input.category}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <label>is active?</label>
                    <input
                      placeholder={`${e.active}`}
                      name="active"
                      defaultValue={e.active}
                      required
                      value={input.active}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </div>
                  <button type="submit">UPDATE</button>
                </form>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default UpdateOptions;
