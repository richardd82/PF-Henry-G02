import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllLessons,
  getAllModules,
} from "../../redux/actions/bootcampActions";

const Module = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.bootcamp.lessons);
  const modules = useSelector((state) => state.bootcamp.modules);

  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
  }, [dispatch]);
  return (
    <div>
      {modules.map((modules, index) => {
        if (window.location.pathname === `/bootcamp/module/${modules.id}`) {
          return lessons.map((obj, index) => {
            if (obj.moduleId === modules.id) {
              return (
                <div key={index}>
                  <div className="position">
                    <Link key={obj.id} to={`/bootcamp/lecture/${obj.id}`}>
                      <h1>{index + 1}</h1>
                      <h1>{obj.name}</h1>
                      <h5>See lessons</h5>
                    </Link>
                  </div>
                </div>
              );
            } else {return <div>Loading</div>;}
          });
        }
        return ""
      })} 
    </div>
  );
};

export default Module;