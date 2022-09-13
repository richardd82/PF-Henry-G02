import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   clearState,
//   getAllLessons,
//   getAllModules,
// } from "../../redux/actions/bootcampActions";
// import { getTodosUsuarios } from "../../redux/actions/userAdmin";
import Nav from "../Nav/Nav";
import Modulebutton from "./moduleButton";

function Classnames({user}) {

// const [asist, setAsist] = useState([]) 


//   const dispatch = useDispatch();
//   const lessons = useSelector((state) => state.bootcamp.lessons);
//   const modules = useSelector((state) => state.bootcamp.modules);
//   const usersAsist = useSelector((state) => state.users.users);
//   const student = usersAsist.filter((user) => {
//     return user.category === "student" 
//   })


// const handleSubmit = (e) =>{
//   e.preventDefault();
//   // dispatch(saveAsist([asist]))
// }



// const checkAsist = (e) => {
// // console.log(e.target.checked)
//   setAsist(prev => 
//     {return  {
//     ...prev,
//     [e.target.value] : {
//       ...prev[e.target.value],
//       [e.target.name] : e.target.checked
//     }}
  
// }
//   )
// }
// const data = [];
// console.log(data = [asist])
  
//   // useEffect(() => {
//   //   dispatch(getAllModules());
//   //   dispatch(getAllLessons());
//   //   dispatch(getTodosUsuarios())
//   //   return () => {
//   //     dispatch(clearState());
//   //   };
//   // }, [dispatch]);
  return (
    <>
    <h1>Hola</h1>
    {/* <Nav user={user}/>
      <div className="moduleContainer">
        <Modulebutton />
        <form onSubmit={e => handleSubmit(e)}>
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
                      `/attendance/${module.id}` && (obj.moduleId === module.id)
                    ) {
                      return (
                          <div key={index}>
                          <h1>{obj.name}</h1>
                              {student.map((objeto, index) => {
                                    return (
                                      <div key={index}>
                                        <p key={index} className="sectionModuloClases">
                                           {`${objeto.name}
                                          ${objeto.lastname} `}
                                          <input
                                            onChange={e => checkAsist(e)}
                                            type="checkbox"
                                            id={index}
                                            name={objeto.id}
                                            value={obj.id}
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
          <button type="submit">Guardar asistencias</button>
        </form>

      </div> */}
    </>
  );
}

export default Classnames;
