import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../components/BootcampComponents/ClaseDetails.css'
import {
  getAllLessons,
  getAllModules,
} from "../../redux/actions/bootcampActions";
import Contact from "../../components/Contact/Contact";


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
              <section className="section__modulo-clases">
          <article>
                <div className="position">
                  <Link key={obj.id} to={`/bootcamp/lecture/${obj.id}`}>
                <p>{`${index + 1} ${obj.name}`}</p>
                    <div>
                  <img src="./assest/github.png" alt=""/>
                  <img src="./assest/sheet.png" alt=""/>
                   </div>
                    <h5>See lessons</h5>
                  </Link>
                </div>
          </article>

                </section> 
              </div>
            );
          } else {return <div>Loading</div>;}
        });
      }
      return ""
    })}
    <footer>
          <Contact/>
        </footer>
  </div>
);
};


export default Module

