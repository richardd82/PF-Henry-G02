import React from "react";
import { Link } from "react-router-dom";


const ButtonModule = ({data, title}) => {
  return (
    <div>
        <h1>{title}</h1>
      {data.map((obj, index) => {
        return (
          <Link key={obj.module} to={`/${title.toLowerCase()}/module/${obj.module}`}>
            <button
              className="button-profile"
              id={obj.module}
              name={"Module " + obj.module}
              type="button"
            >
              M{`${obj.module}`}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonModule;