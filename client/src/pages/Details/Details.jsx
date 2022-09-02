import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CodeReviewOn from "./ConditionalRender/CodeReviewOn";
import LectureOn from "./ConditionalRender/LectureOn";

const Details = () => {
  const [lectureOn, setLectureOn] = useState(false);

  if (!lectureOn) {
    return <LectureOn handleEvent={setLectureOn} />;
  }
  return <CodeReviewOn handleEvent={setLectureOn} />;
};

export default Details;
