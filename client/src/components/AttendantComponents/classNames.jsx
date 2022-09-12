import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getAllLessons,
  getAllModules,
} from "../../redux/actions/bootcampActions";
import Nav from "../NavBar/Nav";
import Modulebutton from "./ModuleButton";

function Classnames({user}) {
  const estudiante = [
    { name: "Jorge Nicolas" },
    { name: "Alberto Berto" },
    { name: "Rigoberto Berto" },
    { name: "Gilberto Berto" },
    { name: "Berto Alberto Rigoberto Gilberto" },
  ];

  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.bootcamp.lessons);
  const modules = useSelector((state) => state.bootcamp.modules);

  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);
  return (
    <>
    {/* <Nav user={user}/> */}
      <div className="moduleContainer">
        <Modulebutton />
        <form>
          {lessons
                        .sort((a, b) => {
                          const aDate = new Date(a.createdAt);
                          const bDate = new Date(b.createdAt);
                          return aDate - bDate;
                        })
                        .map((obj, index)=> {
            return (
              <div key={obj.id}>
                {modules &&
                  modules.map((module, index)=> {
                    if (
                      window.location.pathname ===
                      `/bootcamp/attendant/${module.id}` && (obj.moduleId === module.id)
                    ) {
                      return (
                          <div key={index}>
                          <h1>{obj.name}</h1>
                              {estudiante.map((objeto, index) => {
                                    return (
                                      <div key={index}>
                                        <p key={index} className="sectionModuloClases">
                                          {objeto.name}
                                          <input
                                            type="checkbox"
                                            id={index}
                                            name={obj.name}
                                            value={obj.name}
                                          />
                                        </p>
                                      </div>
                                    );
                                })}

                          </div>
                      ) 
                    }
                    return "";
                  })}
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}

export default Classnames;
