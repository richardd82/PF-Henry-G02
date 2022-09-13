import React, { useEffect } from "react";
import { useState } from "react";
import { postNewClass, getAllClasses } from "../../../../redux/actions/userAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import Nav from "../../NavBar/Nav.js";

const FormNewClass = () => {
  const [errors, setErrors] = useState({});
  const adminUser = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    lectureLink: "",
    lectureLink2: "",
    codeReviewLink: "",
    codeReviewLink2: "",
    description: "",
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
  const handleSubmite = (e) => {
    e.preventDefault(e);

    dispatch(postNewClass(input));
    alert("User Created");
    setInput({
      name: "",
      lectureLink: "",
      lectureLink2: "",
      codeReviewLink: "",
      codeReviewLink2: "",
      description: "",
    });
    
  };

  return (
    <div>
      <h1>Hola</h1>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmite(e);
        }}
      >
        <label>
          <b>*</b>Class Title:
        </label>
        <input
          placeholder="Title"
          type="text"
          value={input.name}
          name="name"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        {/* {errors.name && <h1>{errors.name}</h1>} */}

        <label>
          <b>*</b>Lecture:
        </label>
        <input
          placeholder="paste url"
          type="url"
          value={input.lectureLink}
          name="lectureLink"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        {/* {errors.lastname && <h1>{errors.lastname}</h1>} */}
        <label>Additional Lecture: </label>
        <input
          placeholder="paste url"
          type="url"
          value={input.lectureLink2}
          name="lectureLink2"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <label>Code Review:</label>
        <input
          placeholder="paste url"
          type="url"
          value={input.codeReviewLink}
          name="codeReviewLink"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <label>Additional Code Review :</label>
        <input
          placeholder="paste url"
          type="url"
          value={input.codeReviewLink2}
          name="codeReviewLink2"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>

        {/* {errors.category && <h1>{errors.category}</h1>} */}
        <button type="submit"> Create Class</button>
      </form>
    </div>
  );
};
export default FormNewClass;
