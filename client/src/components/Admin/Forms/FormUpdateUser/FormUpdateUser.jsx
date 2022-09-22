import React, { useEffect } from "react";
import { getTodosUsuarios } from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarEmail from "./SearchBarEmail";
import s from './FormUpdate.module.css';
import {FiChevronsUp} from 'react-icons/fi';
import Nav from '../../../Nav/Nav';

const FormUpdateUser = ({user}) => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.users.users);
  const userMapped = updateUser.map((e) => e);
  const userId = userMapped.map((e) => e.name + " " + e.id);
  const userName = userMapped.map((e) => e.name);
  const idName = { id: ` ${userId}` };
  //   console.log("User name: ", userName);
  console.log(idName);


  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);
 const student = updateUser.filter(e => e.category === 'student' || e.category === 'ta')
 const teacher = updateUser.filter(e => e.category === 'teacher')
 const admin = updateUser.filter(e => e.category === 'admin')

 let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  return (
    <>
    <Nav user={user} /> 
    <div style={{marginLeft: '200px'}}>
      <SearchBarEmail />
          <div>
            <table className={s.demo}>
	<caption style={{fontWeight: 'bold', color: 'white'}}>ESTUDIANTES<br/><br/></caption>
	<thead>
	<tr>
		<th>Nombre</th>
		<th>E-mail</th>
		<th>Categoría</th>
		<th>Activo</th>
    <th>&nbsp;</th>
	</tr>
	</thead>
     {
      student.map(e => {
        return (
	<tbody>
	<tr>
		<td style={{width: '300px', color: 'white'}}>{e.name}  {e.lastname}</td>
		<td style={{width: '350px', color: 'white'}}>{e.email}</td>
		<td style={{width: '130px', color: 'white'}}>{e.category}</td>
		<td style={{width: '70px', color: 'white', textAlign: 'center'}}>{e.active.toString().replace('true', '✔️').replace('false', '❌')}</td>
    <Link to={e.id}><td style={{width: '110px'}}>Update</td></Link>
	</tr>
	</tbody>
)
})
}
  </table>
          </div>
          <br/>
          <div>
            <table className={s.demo}>
	<caption style={{fontWeight: 'bold', color: 'white'}}>INSTRUCTORES/AS<br/><br/></caption>
	<thead>
	<tr>
		<th>Nombre</th>
		<th>E-mail</th>
		<th>Categoría</th>
		<th>Activo</th>
    <th>&nbsp;</th>
	</tr>
	</thead>
     {
      teacher.map(e => {
        return (
	<tbody>
	<tr>
		<td style={{width: '300px', color: 'white'}}>{e.name}  {e.lastname}</td>
		<td style={{width: '350px', color: 'white'}}>{e.email}</td>
		<td style={{width: '130px', color: 'white'}}>{e.category.replace('teacher', 'profesor/a')}</td>
		<td style={{width: '70px', color: 'white', textAlign: 'center'}}>{e.active.toString().replace('true', '✔️').replace('false', '❌')}</td>
    <Link to={e.id}><td style={{width: '110px'}}>Update</td></Link>
	</tr>
	</tbody>
)
})
}
  </table>
          </div>
            <br/>
          <div>
            <table className={s.demo}>

	<caption style={{fontWeight: 'bold', color: 'white'}}>ADMINISTRADORES/AS<br/><br/></caption>
	<thead>
	<tr>
		<th>Nombre</th>
		<th>E-mail</th>
		<th>Categoría</th>
		<th>Activo</th>
    <th>&nbsp;</th>
	</tr>
	</thead>
     {
      admin.map(e => {
        return (
	<tbody>
	<tr>
		<td style={{width: '300px', color: 'white'}}>{e.name}  {e.lastname}</td>
		<td style={{width: '350px', color: 'white'}}>{e.email}</td>
		<td style={{width: '130px', color: 'white'}}>{e.category.replace('admin', 'administrador/a')}</td>
		<td style={{width: '70px', color: 'white', textAlign: 'center'}}>{e.active.toString().replace('true', '✔️').replace('false', '❌')}</td>
    <Link to={e.id}><td style={{width: '110px'}}>Update</td></Link>
	</tr>
	</tbody>
)
})
}
  </table>
    </div>
    <button onClick={topFunction} className={s.myBtn} id={'myBtn'}><FiChevronsUp/></button>
    </div>
    </>
  )
};

export default FormUpdateUser;

