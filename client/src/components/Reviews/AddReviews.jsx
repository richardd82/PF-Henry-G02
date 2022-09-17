import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getAllStandUps,
  getTodosUsuarios,
} from "../../redux/actions";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./AddReview.css";
import { FaCheck } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

export default function AddReview(){
    const user = {
        name: "Romi Jimenez",
        id: "105104a9-9e18-4934-b950-18de117aa014",
        standupId: "6c5dc9cc-460c-408c-8cb8-cfa94af873ec",
        lastname: "Jimenez",
        email: "romijimenez06@gmail.comimage",
        category: "ta",
        active: true,
      };
    const dispatch = useDispatch()
    const users = useSelector(state=> state.users.users)

    useEffect(()=>{
        dispatch(getTodosUsuarios())
    },[dispatch])



    return (
        <div>
            {
                users && users.map(e => {
                    if(e.standupId === user.standupId && e.category === "student")
                    return (
                    <Link to={`/reviews/create/${e.id}`}>
                    <p>
                        {e.name}
                    </p>
                    </Link>)
                } )
            }
        </div>
    )
}

/* export default function AddReview() {

    const labels = {
       // 0.5: 'Useless',
        1: 'Useless+',
       // 1.5: 'Poor',
        2: 'Poor+',
       // 2.5: 'Ok',
        3: 'Ok+',
       // 3.5: 'Good',
        4: 'Good+',
       // 4.5: 'Excellent',
        5: 'Excellent+',
      };
      
      function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }



  

  const [valor, setValor] = useState({
    valor: "0",
    id: "",

  });
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);


  const dispatch = useDispatch();

  //const reviews = useSelector(state=> state.reviews.reviews)
  useEffect(() => {
    dispatch(getTodosUsuarios());
    dispatch(getAllStandUps());
    //ver que recibe en la action  en la action
  }, [dispatch]);
  //estrellas: numeros de puntuacion
  //textarea: espacio para dejar comentario
  //traigo los usuarios mapeo los usuarios relacionados al standupp
  //mapeo standup y busco al standup del ta si el sup coincide con el id del ta
  //si lo anterior es true mapeo a los alumnos y me traigo a los usuarios que coincidan con ese sup
  //form titulo: nombre del alumnos , estrellitas para puntuar, comentario
  // boton submit handlesubmit
  const users = useSelector((state) => state.users.users);
  const className = "selectedstars";

  const handleClick = (e) => {
    e.preventDefault();
    setValue({
      ...valor,
      valor: e.currentTarget.value,
      id: e.target.name,
    });
  };

  return (
    <>
    
      <div>
        <h1>REVIEWS USERS STANDUP de: {user.name}</h1>
        {users &&
          users.map((e) => {
           
            if (e.standupId === user.standupId && e.category === "student") {
              return (
                  <Box 
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                <Rating
                    
                    name={"hover-feedback"}
                    value={value}
                    precision={1}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }} 
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
                </Box>
              );
            }
          })}
      </div>
    </>
  ); */
//}
 {/* <div key={e.id}>
                  <form>
                    <div key={e.id} style={{ display: "flex" }}>
                      <p>{e.name}</p>
                      <button
                        onClick={handleClick}
                        className={valor.className}
                        value="1"
                        name={e.id}
                      >
                        <AiOutlineStar />
                      </button>
                      <button
                        className={valor.className}
                        onClick={handleClick}
                        value="2"
                        name={e.id}
                      >
                        <AiOutlineStar />
                      </button>
                      <button
                        className={valor.className}
                        onClick={handleClick}
                        value="3"
                        name={e.id}
                      >
                        <AiOutlineStar />
                      </button>
                      <button
                        className={valor.className}
                        onClick={handleClick}
                        value="4"
                        name={e.id}
                      >
                        <AiOutlineStar />
                      </button>
                      <button
                        className={valor.className}
                        onClick={handleClick}
                        value="5"
                        name={e.id}
                      >
                        <AiOutlineStar />
                      </button>
                    </div>
                    <textarea
                      wrap="hard"
                      required
                      placeholder="Deje un comentario sobre el estudiante."
                      style={{
                        border: "1px solid black",
                        width: "400px",
                        height: "200px",

                        resize: "none",
                      }}
                    ></textarea>
                    <button
                      style={{ display: "flex", color: "green" }}
                      type="submit"
                      disabled={valor.valor == "0" ? true : false}
                    >
                      <FaCheck />
                    </button>
                    <button
                      style={{ display: "flex", color: "red" }}
                      type="submit"
                    >
                      <TiDelete />
                    </button>
                  </form>
                </div> */}



/* import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
 */