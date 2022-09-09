import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getAllLessons,
  getAllModules,
  clearState,
} from '../../redux/actions/bootcampActions';
import Contact from '../../components/Contact/Contact';
// Assets
import github from '../../media/github.png';
import sheet from '../../media/sheet.png';
import './ClaseDetails.css';
import Nav from '../../components/Nav/Nav';


const Module = ({ user }) => {
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.bootcamp.lessons);
  const modules = useSelector(state => state.bootcamp.modules);

  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <>
      <Nav user={user} />
      <div className="moduleContainer">
        {modules &&
          modules.map((module, index) => {
            if (window.location.pathname === `/module/${module.id}`) {
              return lessons
                .sort((a, b) => {
                  const aDate = new Date(a.createdAt);
                  const bDate = new Date(b.createdAt);
                  return aDate - bDate;
                })
                .map((obj, index) => {
                  if (obj.moduleId === module.id) {
                    return (
                      <div key={index} className="sectionModuloClases">
                        <article>
                          <Link key={obj.id} to={`/lecture/${obj.id}`}>
                            <p>{`${obj.name}`}</p>
                            <div>
                              <img src={github} alt="github" />
                              <img src={sheet} alt="sheet" />
                            </div>
                            <h5>See lessons</h5>
                          </Link>
                        </article>
                      </div>
                    );
                  } else {
                    return null;
                  }
                });
            }
            return '';
          })}
      </div>
    </>
  );
};

export default Module;
