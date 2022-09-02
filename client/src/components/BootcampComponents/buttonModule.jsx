import React from "react";
import { Link } from "react-router-dom";
import "./buttonModule.css"

const ButtonModule = ({data, title, programs}) => {
  return (<div>
    <div className="position" >
      {data.map((obj, index) => {
        return (
          <Link key={obj.module} to={`/${title.toLowerCase()}/module/${obj.module}`}>
            <h1>{programs[index].program}</h1>
            <h1
            >
              M{`${obj.module}`}
            </h1>
          </Link>
        );
      })}
    </div>
  </div>
  );
};

export default ButtonModule;