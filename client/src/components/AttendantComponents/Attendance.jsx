import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentList from "./StudentList.jsx";
// Actions
import {
  getUsers,
  getClasses,
  getModules,
  getCohorts,
  getStandups,
} from "../../redux/actions/attendanceActions.js";
import Nav from "../Nav/Nav.jsx";

const Attendance = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.attendance);
  const ta = state.users.filter((e) => e.name === user.displayName)[0];

  const students = state.users.filter(
    (e) => e.category === "student" && e.standupId === ta.standupId
  );

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCohorts());
    dispatch(getModules());
    dispatch(getStandups());
    dispatch(getClasses());
  }, [dispatch, state.users.length]);
  const [options, setOptions] = useState({
    module: "",
    lecture: "",
  });

  const handleChange = (e) => {
    setOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <h1>CONTROL ASISTENCIAS StandUp</h1>
      <form>
        <select name="module" onChange={(e) => handleChange(e)}>
          <option value="none">Select a Module</option>
          {state.modules &&
            state.modules.map((module) => {
              return (
                <option key={module.name} value={module.id}>
                  {module.name}
                </option>
              );
            })}
        </select>
        <select name="lecture" onChange={(e) => handleChange(e)}>
          <option value="none">Select a Lecture</option>
          {state.lectures &&
            state.lectures
              .filter(
                (lecture) => lecture.moduleId.toString() === options.module
              )
              .map((lecture) => {
                return (
                  <option key={lecture.id} value={lecture.id}>
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
              (lecture) => lecture.id.toString() === options.lecture
            )[0].id
          }
          currentStudents={students}
          standup={ta.standupId}
          cohort={ta.cohortId}
        />
      )}
    </div>
  );
};

export default Attendance;
