import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import { getAllLessons } from '../../redux/actions/bootcampActions';

const Module = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.bootcamp.lessons);
  // const modules = useSelector((state) => state.bootcamp.modules);

  useEffect(() => {
    // dispatch(getAllModules());
    dispatch(getAllLessons());
  }, [dispatch]);
  return (
    <div>
      {lessons &&
        lessons.map((lesson, idx) => {
          return (
            <Link to={'/bootcamp/module/' + lesson.id}>
              <div key={lesson.id}>
                <h1>{`${idx + 1} ${lesson.name}`}</h1>
              </div>
            </Link>
          );
        })}
        <footer>
          <Contact />
        </footer>
    </div>
  );
};

export default Module;
