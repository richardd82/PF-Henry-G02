import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../components/BootcampComponents/ClaseDetails.css';
import {
  getAllLessons,
  getAllModules,
  clearState
} from '../../redux/actions/bootcampActions';
import Contact from '../../components/Contact/Contact';

const Module = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.bootcamp.lessons);
  const modules = useSelector(state => state.bootcamp.modules);

  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
    return () => {
      dispatch(clearState())
    }
  }, [dispatch]);
 
  return (
    <div>
      {modules && modules.map((module, index) => {
        if (window.location.pathname === `/bootcamp/module/${module.id}`) {
          return lessons.map((obj, index) => {
            if (obj.moduleId === module.id) {
              return (
                <div key={index}>
                  <section className="section__modulo-clases">
                    <article>
                      <div className="position">
                        <Link key={obj.id} to={`/bootcamp/lecture/${obj.id}`}>
                          <p>{`${index + 1} ${obj.name}`}</p>
                          <div>
                            <img src="./assest/github.png" alt="" />
                            <img src="./assest/sheet.png" alt="" />
                          </div>
                          <h5>See lessons</h5>
                        </Link>
                      </div>
                    </article>
                  </section>
                </div>
              );
            } else {
              return <div>Loading</div>;
            }
          });
        }
        return '';
      })}
      <footer>
        <Contact />
      </footer>
    </div>
  );
};

export default Module;
