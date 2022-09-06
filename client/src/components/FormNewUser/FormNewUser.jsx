import React from "react";
import { useState } from "react";
import { postNewUser } from "../../redux/actions/userAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getTodosUsuarios } from "../../redux/actions/userAdmin";
import { useEffect } from "react";

const FormNewUser = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.usuarios);
  const usersExist = adminUser.users.filter((e) => e.email);
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
    const exist =  usersExist.find(
        (r) => r.email !== input.email
      );
    if (input.image === "") {
      input.image =
        "https://imgs.search.brave.com/_KPvrLWa9wT9dTKgNV9dQwk7IWkdnjWzC-Cv7cyJRo0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/aGVhbHRobndlbGwu/Y29tL2hlYWx0aG53/ZWxsL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA0LzhiZWYx/OTY1LTI0MDQtNDky/OS1hYjI5LTFmZGIx/ZWIzYjY5Zi5qcGc";
    }
    if (exist === input.email) {
      return alert("EMAIL ALREADY EXIST");
    } else if (Object.keys(errors).length) {
      return alert(Object.values(errors));
    } else {
      dispatch(postNewUser(input));
      alert("¡RECIPE CREATED!");
      setInput({
        name: "",
        lastname: "",
        email: "",
        image: "image",
        password: "123",
        active: true,
        category: "",
      });
    }
  };

  return (
    <div>
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
