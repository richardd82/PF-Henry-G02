import React from 'react';
import { Link } from 'react-router-dom';
import './ClaseDetails.css';
import {
  clearState,
  getAllLessons,
  getAllModules,
} from '../../redux/actions/bootcampActions.js';
import { useDispatch } from 'react-redux';

const ButtonModule = ({ data, title, modules }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearState());
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
                to={`/${title.toLowerCase()}/module/${obj.id}`}
              >
                <section className="sectiom__title-modulo">
                  <h1>{obj.name}</h1>
                </section>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ButtonModule;
