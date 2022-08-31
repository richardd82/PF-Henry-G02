import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Details = () => {
  const results = [
    {
      name: "CSS Avanzado",
      url: "https://vimeo.com/743497945",
      codeReview: "https://vimeo.com/ecoledesnouvellesimages/kayak",
    },

    { name: "React Redux",
      url: "https://vimeo.com/744368057" },
    {
      name: "Kick off PI",
      url: "https://vimeo.com/ecoledesnouvellesimages/kayak",
      codeReview: "https://vimeo.com/744368057"
    },
  ];

  const { id } = useParams();
  const idNext = parseInt(id);

  return (
    <div>
      <div>Details</div>
      <div>
        <h1>{results[id].name}</h1>
        <ReactPlayer url={results[id].url} controls></ReactPlayer>
        <div>
          <h6>CODE REVIEW</h6>
          <ReactPlayer url={results[id].codeReview} controls></ReactPlayer>
        </div>
      </div>
      <div>
        <Link to={`/bootcamp/details/${idNext-1}`}>
          <button disabled={idNext === 0 ? true : false}>Prev class</button>
        </Link>
        <Link to={`/bootcamp/details/${idNext+1}`}>
          <button disabled={idNext === results.length-1 ? true : false}>Next class</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
