import React from 'react';
import { Link } from 'react-router-dom';
import {
  clearStateModules,
  getAllLessons,
  getAllModules,
} from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Modulebutton = ({ data }) => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.classes.lessons)
  const modules = useSelector((state) => state.modules.modules)


useEffect(() => {
  dispatch(clearStateModules());
  dispatch(getAllLessons())
  dispatch(getAllModules())
}, [dispatch])


  const handleClick = () => {
    dispatch(clearStateModules());
    dispatch(getAllLessons())
    dispatch(getAllModules())
  };

  return (
    <div>
      <div>
        {modules
          .sort((a, b) => {
            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);
            return aDate - bDate;
          })
          .map((obj, index) => {
            return (
              <Link
                onClick={() => handleClick()}
                key={index}
                to={`/attendance/${obj.id}`}
              >
                <section>
                  <h1>{obj.name}</h1>
                </section>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Modulebutton;