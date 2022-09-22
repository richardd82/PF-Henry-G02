import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAllLessons,
  getAllModules,
} from "../../redux/actions/index.js";
import Modulebutton from '../../components/AttendantComponents/moduleButton';
import Nav from '../../components/Nav/Nav.jsx';
import {Link} from 'react-router-dom';
import rocket from "../../assets/media/cohete.png";

function Attendant({ user }) {

    const modules = useSelector((state) => state.modules.modules);
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(getAllLessons());
      dispatch(getAllModules());
    };

    // const dispatch = useDispatch()
  return (
    <div className="attendance__container">
      <Nav user={user}/>
        <div className ="nav__links">
        <ul>
          {modules
            .sort((a, b) => {
              const aDate = new Date(a.createdAt);
              const bDate = new Date(b.createdAt);
              return aDate - bDate;
            })
            .map((obj, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => handleClick()}
                    key={index}
                    to={`/module/${obj.id}`}
                  >
                    <section className="sectiom__title-modulo">
                      <h1>{obj.name}</h1>
                    </section>
                  </Link>
                </li>
              );
            })}
          <img className="nav__rocket" src={rocket} alt="" />
        </ul>

      <Modulebutton />
        </div>
    </div>
  )
}

export default Attendant;
