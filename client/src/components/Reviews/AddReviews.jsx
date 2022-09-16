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
import { Rating } from "react-simple-star-rating";

export default function AddReview() {
  const user = {
    name: "Romi Jimenez",
    id: "105104a9-9e18-4934-b950-18de117aa014",
    standupId: "6c5dc9cc-460c-408c-8cb8-cfa94af873ec",
    lastname: "Jimenez",
    email: "romijimenez06@gmail.comimage",
    category: "ta",
    active: true,
  };
  const [rating, setRating] = useState(0)
  const [valor, setValue] = useState({
    valor: "0",
    id: "",
    className: "",
  });
  let rate = 1;
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }


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
      id: e.currentTarget.name,
    });

    let currentValor = e.currentTarget.value;
    while (currentValor > 0 && currentValor < 5) {
      setValue({
        className: className,
      });
      if (valor.valor === currentValor) {
      }
      currentValor = currentValor - 1;
      console.log(currentValor);
    }
  };

  return (
    <>
      <div>
      <div >
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
        <h1>REVIEWS USERS STANDUP de: {user.name}</h1>
        {users &&
          users.map((e) => {
            // console.log(user.standupId)
            if (e.standupId === user.standupId && e.category === "student") {
              return (
                <div key={e.id}>
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
                </div>
              );
            }
          })}
      </div>
    </>
  );
}
