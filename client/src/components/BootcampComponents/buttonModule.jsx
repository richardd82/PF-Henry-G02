import React from "react";
import { Link } from "react-router-dom";
import "./buttonModule.css"

const ButtonModule = ({data, title, programs}) => {
  return (<div>
        <h1>{title}</h1>
    <div className="position" >
      {data.map((obj, index) => {
        return (
          <Link key={obj.module} to={`/${title.toLowerCase()}/module/${obj.module}`}>
            <h1>{programs[index].program}</h1>
            <button
              id={obj.module}
              name={"Module " + obj.module}
              type="button"
            >
              M{`${obj.module}`}
            </button>
            <h5>See lessons</h5>
          </Link>
        );
      })}
    </div>
  </div>
  );
};

export default ButtonModule;