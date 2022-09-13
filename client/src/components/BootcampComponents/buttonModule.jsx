import React from 'react';
import { Link } from 'react-router-dom';
import './ClaseDetails.css';
import {
  getAllLessons,
} from '../../redux/actions/bootcampActions.js';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { getClasses, clearStateClasses } from '../../redux/actions/classesActions';
import { getAllModules, clearStateModules } from '../../redux/actions/modulesActions.js';

const ButtonModule = ({ data, title }) => {
  const dispatch = useDispatch();
  const modules = useSelector(state => state.modules.modules);
  
  const handleClick = () => {
    dispatch(clearStateClasses());
    dispatch(clearStateModules());
    dispatch(getClasses())
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
