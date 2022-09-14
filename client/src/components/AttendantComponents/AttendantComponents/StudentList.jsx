import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Actions
import { postAttendance } from "../../../redux/actions/index";

const StudentList = ({ currentStudents, lecture, cohort, standup }) => {
  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({
    standupId: standup,
    cohortId: cohort,
    classId: lecture,
    students: [],
  });
  console.log(attendance);
  useEffect(() => {
    return () => {
      setAttendance({
        standupId: standup,
        cohortId: cohort,
        classId: lecture,
        students: [],
      });
    };
  }, [currentStudents, standup, cohort, lecture]);

  const handleSelect = (e) => {
    const { name, id, checked } = e.target;
    setAttendance((prev) => {
      if (checked === false) {
        const filteredStudents = prev.students.filter(
          (student) => student.id !== id
        );
        return {
          ...prev,
          students: filteredStudents,
        };
      } else {
        return {
          ...prev,
          students: [...prev.students, { id, name }],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAttendance(attendance));
    setAttendance({
      standupId: standup,
      cohortId: cohort,
      classId: lecture,
      students: [],
    });
  };

  return (
    <div>
      <h1>Estudiantes</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {currentStudents &&
          currentStudents.map((student) => {
            return (
              <div key={student.id}>
                <label>{student.name}</label>
                <input
                  className="inputCreate"
                  id={student.id}
                  name={student.name}
                  type="checkbox"
                  onChange={(e) => handleSelect(e)}
                />
              </div>
            );
          })}
        <button className="submitButton" type="subtmit">
          Enviar Asistencias
        </button>
      </form>
    </div>
  );
};

export default StudentList;
