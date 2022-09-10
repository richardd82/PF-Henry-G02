import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Actions
import { postAttendance } from '../../redux/actions/attendanceActions.js'

const StudentList = ({ students, lecture, cohort }) => {
  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({
    cohortId: cohort.id,
    classId: lecture.id,
    students: [],
  });

  useEffect(() => {
    return () => {
      setAttendance({
        cohortId: cohort.id,
        classId: lecture.id,
        students: [],
      });
    };
  }, [students, cohort, lecture]);

  const handleSelect = e => {
    setAttendance(prev => {
      if (e.target.checked === false) {
        const filteredUsers = prev.students.filter(
          userId => userId !== e.target.id
        );
        return {
          ...prev,
          students: filteredUsers,
        };
      } else {
        return {
          ...prev,
          students: prev.students.concat(e.target.id),
        };
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Dispatch al back
    dispatch(postAttendance(attendance))
    setAttendance({
      cohortId: cohort.id,
      classId: lecture.id,
      students: [],
    });
  };

  return (
    <div>
      <h1>Estudiantes</h1>
      <form onSubmit={e => handleSubmit(e)}>
        {students &&
          students.map(student => {
            return (
              <div>
                <label>{student.name}</label>
                <input
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  type="checkbox"
                  onChange={e => handleSelect(e)}
                />
              </div>
            );
          })}
        <button type="subtmit">Enviar Asistencias</button>
      </form>
    </div>
  );
};

export default StudentList;
