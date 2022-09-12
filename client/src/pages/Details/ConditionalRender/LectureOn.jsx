import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

const LectureOn = ({ handleEvent }) => {
  const dispatch = useDispatch();
  const myLesson = useSelector((state) => state.videos.detailVideos);

  useEffect(() => {
    dispatch(getVideosById(id));
    return () => dispatch(clearStateVideos());
  }, []);
  const { id } = useParams();
  const idNext = parseInt(id);
  const idPrev = parseInt(id);

  return (
    <div>
      <button onClick={(e) => handleEvent(true)}>Code Review</button>
      <h2> Lecture clase: {results[id].name}</h2>
      <div>
        <h1>{results[id].name}</h1>
        <p>Author: {results[id].professor}</p>

        <ReactPlayer url={results[id].url} controls></ReactPlayer>
      </div>
    </div>
  );
};

export default LectureOn;
