import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../Nav/Nav.js';
import StudentList from '../StudentList.jsx';
// Actions
import {
  getUsers,
  getClasses,
  getModules,
  getCohorts,
  getStandups,
} from '../../redux/actions/attendanceActions.js';

const Attendance = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.attendance);
  const ta = state.users.filter(e => e.name === user.displayName);
  const students = state.users.filter(e => {
    return (
      e.category === 'student' &&
      e.standupId === ta.standupId &&
      e.cohortId === ta.cohortId
    );
  });

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCohorts());
    dispatch(getModules());
    dispatch(getStandups());
    dispatch(getClasses());
  }, [dispatch, state.users.length]);

  const [options, setOptions] = useState({
    module: '',
    cohort: '',
    standup: '',
    lecture: '',
  });

  const handleChange = e => {
    setOptions(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <Nav user={user} />
      <form>
        <select name="module" onChange={e => handleChange(e)}>
          <option value="none">Select a Module</option>
          {state.modules &&
            state.modules.map(module => {
              return (
                <option key={module.name} value={module.id}>
                  {module.name}
                </option>
              );
            })}
        </select>
        {/* <select name="cohort" onChange={e => handleChange(e)}>
          <option value="none">Select a Cohort</option>
          {state.cohorts &&
            state.cohorts.map(cohort => {
              return (
                <option key={cohort.name} value={cohort.id}>
                  {cohort.name}
                </option>
              );
            })}
        </select>
        <select name="standup" onChange={e => handleChange(e)}>
          <option value="none">Select a Standup</option>
          {state.standups &&
            state.standups
              .filter(standup => standup.cohortId.toString() === options.cohort)
              .map(standup => {
                return (
                  <option key={standup.name} value={standup.id}>
                    {standup.name}
                  </option>
                );
              })}
        </select> */}
        <select name="lecture" onChange={e => handleChange(e)}>
          <option value="none">Select a Lecture</option>
          {state.lectures &&
            state.lectures
              .filter(lecture => lecture.moduleId.toString() === options.module)
              .map(lecture => {
                return (
                  <option key={lecture.name} value={lecture.id}>
                    {lecture.name}
                  </option>
                );
              })}
        </select>
      </form>
      {options.module && options.lecture && (
        <StudentList
          lecture={
            state.lectures.filter(
              lecture => lecture.id.toString() === options.lecture
            )[0]
          }
          users={students}
          cohort={ta.cohortId}
        />
      )}
    </div>
  );
};

export default Attendance;
