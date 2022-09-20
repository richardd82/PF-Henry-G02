import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import {
  postAttendance,
  getAttendances,
} from '../../redux/actions/attendanceActions.js';

const StudentList = ({ currentStudents, lecture, cohort, standup }) => {
  const dispatch = useDispatch();
  const [attendance, setAttendance] = useState({
    standupId: standup,
    cohortId: cohort,
    classId: lecture,
    students: [],
  });

   useEffect(() => {
    if(attendance.standupId &&  attendance.cohortId && attendance.classId){
    dispatch(
      getAttendances(standup, cohort, lecture)
    );
    }
/*     return () => {
      setAttendance({
        standupId: standup,
        cohortId: cohort,
        classId: lecture,
        students: [],
      });
    };  */
  }, [dispatch, standup, cohort, lecture]); 

  const attendances = useSelector(state => state.attendance.attendances);

  const handleSelect = e => {
    const { name, id, checked } = e.target;
    setAttendance(prev => {
      if (checked === false) {
        const filteredStudents = prev.students.filter(
          student => student.id !== id
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
console.log(attendance.students);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postAttendance(attendance));
    alert('Asistencia enviada');
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
      <form className="form" onSubmit={e => handleSubmit(e)}>
          {currentStudents &&
          currentStudents.map(student => { 
            return (
              <div key={student.id}>
             <label>{student.name}</label>
             <input
               className="inputCreate"
               id={student.id}
               value={true}
               name={student.name}
               type="checkbox"
               onChange={e => handleSelect(e)}
             />
           </div> )
           /*  if(attendances.map(el => el.cohortId === student.cohortId)){
             return (
    
              attendances.map(dbAttendance => {
                if (
                  dbAttendance 
                   student.id === dbAttendance.usersId &&
                  dbAttendance.cohortId === attendance.cohortId &&
                  dbAttendance.classId === attendance.classId 
                ) {
                  return (
                       <div key={student.id}>
                      <label>{student.name}</label>
                      <input
                        className="inputCreate"
                        id={student.id}
                        value={true}
                        name={student.name}
                        type="checkbox"
                        onChange={e => handleSelect(e)}
                      />
                    </div> 
                  );
                } else { 
                  return (
                    <div key={student.id}>
                      <label>{student.name}</label>
                      <input
                        className="inputCreate"
                        id={student.id}
                        name={student.name}
                        type="checkbox"
                        onChange={e => handleSelect(e)}
                      />
                    </div>
                  );
                }
               })
              );
            } 
           return (
            <div>no renderizo nada</div>
           ) */
          })}   
{/*             {currentStudents &&
          currentStudents.map(student => {
            return (
              <div key={student.id}>
                <label>{student.name}</label>
                <input
                  className="inputCreate"
                  id={student.id}
                  name={student.name}
                  type="checkbox"
                  onChange={e => handleSelect(e)}
                />
              </div>
            );
          })}   */}
        <button className="submitButton" type="subtmit">
          Enviar Asistencias
        </button>
      </form>
    </div>
  );
};

export default StudentList;
