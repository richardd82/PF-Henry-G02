import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getAllStandUps } from "../../../../redux/actions/index";
import { useEffect } from "react";
import { postNewStandUp } from "../../../../redux/actions/index";

const FormNewStandUp = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.users.users);
  const usersExist = adminUser.users.map((e) => e.name);
  const [input, setInput] = useState({
    name: "",
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
    dispatch(getAllStandUps());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const exist = usersExist.every((r) => r.name === input.name);

    if (!exist) {
      return alert("NAME ALREADY EXIST");
    } else if (Object.keys(errors).length) {
      return alert(Object.values(errors));
    } else {
      dispatch(postNewStandUp(input));
      alert("Stand Up Created");
      setInput({
        name: "",
      });
    }
  };

  return (
    <div>
      <h1>Create new Stand Up </h1>
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

        <button type="submit"> Create Stand Up </button>
      </form>
    </div>
  );
};

export default FormNewStandUp;
