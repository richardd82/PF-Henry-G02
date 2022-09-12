import React from "react";
import { useState } from "react";
import { postNewUser } from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getTodosUsuarios } from "../../../../redux/actions/index";
import { useEffect } from "react";

const FormNewUser = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.users.users);
  const usersExist = adminUser.users.map((e) => e.email);
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    image: "image",
    password: "123",
    active: true,
    category: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(postNewUser(input));
    alert("User Created");
    setInput({
      name: "",
      lastname: "",
      email: "",
      image: "image",
      password: "123",
      active: true,
      category: "",
    });
  };

  return (
    <div>
      <h1>Create new user </h1>
      <br></br>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Name:</label>
        <input
          placeholder="Insert a name"
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.name && <h1>{errors.name}</h1>} */}

        <label>Last Name:</label>
        <input
          placeholder="Insert a lastname"
          type="text"
          value={input.lastname}
          name="lastname"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.lastname && <h1>{errors.lastname}</h1>} */}

        <label>Email:</label>
        <input
          placeholder="Insert a email"
          type="email"
          value={input.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.email && <h1>{errors.email}</h1>} */}

        <label>Category:</label>
        <input
          placeholder="Insert a user role"
          type="text"
          value={input.category}
          name="category"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.category && <h1>{errors.category}</h1>} */}
        <button type="submit"> Create User</button>
      </form>
    </div>
  );
};

export default FormNewUser;
