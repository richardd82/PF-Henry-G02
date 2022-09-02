import React from "react";
import { Link } from "react-router-dom";
import {moduleArray} from "../Bootcamp/Bootcamp";


const Module = () => {
  console.log()
  return <div>
    {moduleArray.map((obj, index) => {
    if (window.location.pathname === `/bootcamp/module/${obj.module}`){
       return (<div key={obj.module}>
        <div className="position" >
          {obj.themes.map((themes, index) => {
            console.log()
            return (
              <Link key={themes.number} to={`/bootcamp/lecture/${themes.id}`}>
                <h1>{index + 1}</h1>
                <h1>{themes.theme}</h1>
                <h5>See lessons</h5>
              </Link>
            );
          })}
        </div>
      </div>
      );
      }
    else return <div key={obj.module}></div>
    })}
  </div>
 
  };

export default Module;
