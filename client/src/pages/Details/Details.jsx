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
      description:" CSS Avanzado para nuestros proyectos.",
      professor: "Federico Panella"
    },

    {
      name: "React Redux",
      url: "https://vimeo.com/744368057",
      codeReview: "https://vimeo.com/743497945",
      description: " Clase React Redux y su descripción",
      professor: "Martina Scomazzon"
    },
    {
      name: "Kick off PI",
      url: "https://vimeo.com/ecoledesnouvellesimages/kayak",
      codeReview: "https://vimeo.com/744368057",
      description:" Descripción clase Kick off PI",
      professor: "Matias Calvar"

    },
  ];

  const { id } = useParams();
  const idNext = parseInt(id);

  return (
    <div>
      <div>Details</div>
      <div>
        <select>
          <option>Web-FT27b</option>
          <option>Web-FT28A</option>
          <option>Web-FT28B</option>
        </select>
        <h1>{results[id].name}</h1>
        <p>Author: {results[id].professor}</p>
        <ReactPlayer
          url={results[id].url}
          controls
          playable="false"
        ></ReactPlayer>
      </div>
      <div>
        <Link to={`/bootcamp/details/${idNext - 1}`}>
          <button disabled={idNext === 0 ? true : false}>Prev class</button>
        </Link>
        <Link to={`/bootcamp/details/${idNext + 1}`}>
          <button disabled={idNext === results.length - 1 ? true : false}>
            Next class
          </button>
        </Link>
      </div>
      <div>
        <h6>CODE REVIEW</h6>
        <ReactPlayer url={results[id].codeReview} controls></ReactPlayer>
      </div>
      <div>
        <h4>Descripción</h4>
        <p>{results[id].description}</p>
      </div>
    </div>
  );
};

export default Details;
