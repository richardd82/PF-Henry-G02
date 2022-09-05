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
// Assets
import github from '../../media/github.png';
import sheet from '../../media/sheet.png';

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
          return lessons.sort((a, b) => {
            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);
            return aDate - bDate;
          }).map((obj, index) => {
            if (obj.moduleId === module.id) {
              return (
                <div key={index}>
                  <section key={index} className="section__modulo-clases">
                    <article>
                      <div className="">
                        <Link key={obj.id} to={`/bootcamp/lecture/${obj.id}`}>
                          <p>{`${obj.name}`}</p>
                          <div>
                            <img src={github} alt="github" />
                            <img src={sheet} alt="sheet" />
                          </div>
                          <h5>See lessons</h5>
                        </Link>
                      </div>
                    </article>
                  </section>
                </div>
              );
            } else {
              return null
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
