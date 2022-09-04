import React from "react";
import { Link } from "react-router-dom";
import "./ClaseDetails.css"

const ButtonModule = ({data, title, modules}) => {
  return (<div>
    <div>
      {modules.sort((a, b) =>{
       const aDate = new Date(a.createdAt)
       const bDate = new Date(b.createdAt) 
       return aDate - bDate
      }).map((obj, index) => {
        return (
          <Link key={index} to={`/${title.toLowerCase()}/module/${obj.id}`}>
          <section className="">
            <h1>{obj.name}</h1>
            </section>
          </Link>
        );
      })}
    </div>
  </div>
  );
};

export default ButtonModule;