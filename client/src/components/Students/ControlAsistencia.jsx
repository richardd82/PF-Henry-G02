import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllLessons, getAllModules, getTodosUsuarios} from "../../redux/actions";



export default function ControlAsistencia ({user}){
    const [asistencia, setAsistencia] = useState([])
    const [asistenciaStudent, setAsistenciaStudent] = useState({
        asistencias: '',
        total: ''
    })
    const [showAttendance, setShowAttendance]= useState(false)

    const dispatch= useDispatch()
    const classes = useSelector(state => state.classes.allClasses)
    const users = useSelector(state => state.users.allUsers)
    const modules = useSelector(state=> state.modules.allModules) 
    //const asistencia = useSelector(state=> state.allAttendance)


   async function displayAttendance (){
    await getAllAttendances()
        setShowAttendance(true)
    }
     const getAllAttendances = async () => {
        const response = await axios.get(`http://localhost:3001/attendance/get`)
        setAsistencia(response.data)
        setAsistenciaStudent({
            asistencias: contador.length,
            total: classesMaped.length
        })
        }; 
/* useEffect(()=>{
    if(asistenciaStudent.asistencias > 0 ){
        setShowAttendance(true)
    }
}, [asistenciaStudent.asistencias, showAttendance])
 */
    

    let student = ''
    if (!user.category) {
        student = users.filter((e) => e.name === user._json.name );
      }else{
        student = users.filter((e) => e.name === user.name );
        }
    
    useEffect(()=>{
    
        if(!classes){
            dispatch(getAllLessons())
        }
        if(!users){
            dispatch(getTodosUsuarios())
        }
        if(!modules){
            dispatch(getAllModules())
        }


    }, [dispatch, classes, users])

    //const attendanceMaped = asistencia.map(e=>e)
    const attendanceMaped = asistencia.filter(e=> e.usersId ===student[0].id )
   const studentModule = student.map(e=> e.moduleId).toString()
   const classesMaped = classes.filter(e=>e.moduleId === studentModule) 

    const asistenciaModulo = classesMaped.map(e => attendanceMaped.filter(a=>a.classId === e.id))
    const contador = asistenciaModulo.filter(e => e.length > 0)
    
console.log(typeof asistenciaStudent.asistencias);
    return(
        <>
        <button onClick={()=>displayAttendance()}>Ver Asistencias</button>
        {
            asistenciaStudent.asistencias && showAttendance === true ? (
                <div >
                    <p>{`${asistenciaStudent.asistencias} / ${asistenciaStudent.total}`}</p>
                </div>

            ) : null
        }

   

            
        </>
    )
}
