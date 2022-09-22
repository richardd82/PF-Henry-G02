import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getAllStandUps,
  getTodosUsuarios,
} from "../../redux/actions";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./AddReview.module.css";
// import { FaCheck } from "react-icons/fa";
// import { TiDelete } from "react-icons/ti";
// import { useState } from "react";
// import {Rating} from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";


export default function AddReview({ user }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  let ta = "";
  if (user) {
    if (!user.category) {
      ta = users.filter((e) => e.name === user._json.name);
    } else {
      ta = users.filter((e) => e.name === user.name);
    }
  } else {
    ta = "student";
  }

  const taSup = ta.map((e) => e.standupId).toString();

  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

  return (
    <div>
      <Nav user={user} />
      {users &&
        users.map((e) => {
          if (e.standupId === taSup && e.category === "student")
            return (
              <>
                <table className="tg">
                  <thead>
                    <tr>
                    <Link to={`/reviews/create/${e.id}`}>
                      <p>
                        <td className={style.lastnameReviews}>{e.name} {e.lastname} </td>
                      </p>
                    </Link>
                    </tr>
                  </thead>
                </table >
              </>
            );
        })}
    </div>
  );
}



