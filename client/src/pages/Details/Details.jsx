import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsById, clearState } from "../../redux/actions/detailActions";
import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const myLesson = useSelector((state) => state.details.detalle);
  console.log("ESTO ME LLEGA DE DETAILS:", myLesson);
  const { id } = useParams();
  const [lectureOn, setLectureOn] = useState(false);
  useEffect(() => {
    dispatch(getLessonsById(id));
    return dispatch(clearState())
  }, []);

  return (
    <div>
      {myLesson.length > 0 ? (
        <div>
          <h1>ESTO ES DETAILS</h1>
          <h1>{myLesson[0].name}</h1>

          <div>
            <ReactPlayer url={myLesson[0].lectureLink} controls></ReactPlayer>
          </div>
        </div>
      ) : (
        <div>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      )}
    </div>
  );
};

export default Details;
