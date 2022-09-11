import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Actions
import { postAttendance } from '../../redux/actions/attendanceActions.js';

const StudentList = ({ students, lecture, cohort }) => {
  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({
    cohortId: cohort,
    classId: lecture.id,
    students: [],
  });

  useEffect(() => {
    return () => {
      setAttendance({
        cohortId: cohort,
        classId: lecture,
        students: [],
      });
    };
  }, [students, cohort, lecture]);

  const handleSelect = e => {
    const { name, id, checked } = e.target;
    setAttendance(prev => {
      if (checked === false) {
        const filteredStudents = prev.students.filter(student => student.id !== id);
        return {
          ...prev,
          students: filteredStudents,
        };
      } else {
        return {
          ...prev,
          students: prev.students.concat({ id, name }),
        };
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postAttendance(attendance));
    setAttendance({
      cohortId: cohort,
      classId: lecture,
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
