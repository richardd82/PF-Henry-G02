import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const LectureOn = ({ handleEvent }) => {
  const results = [
    {
      name: "CSS Avanzado",
      url: "https://vimeo.com/743497945",
      codeReview: "https://vimeo.com/ecoledesnouvellesimages/kayak",
      description: " CSS Avanzado para nuestros proyectos.",
      professor: "Federico Panella",
    },

    {
      name: "React Redux",
      url: "https://vimeo.com/744368057",
      codeReview: "https://vimeo.com/743497945",
      description: " Clase React Redux y su descripción",
      professor: "Martina Scomazzon",
    },
    {
      name: "Kick off PI",
      url: "https://vimeo.com/ecoledesnouvellesimages/kayak",
      codeReview: "https://vimeo.com/744368057",
      description: " Descripción clase Kick off PI",
      professor: "Matias Calvar",
    },
  ];

  const { id } = useParams();
  const idNext = parseInt(id);
  const idPrev = parseInt(id);

  return (
    <div>
      <button onClick={(e) => handleEvent(true)}>Code Review</button>
      <h2> Lecture clase: {results[id].name}</h2>
      <div>


        {/* ESTO PARA DESPUES DEL LUNES */}
        {/* <div>
          <a href="#">
            <button>M1</button>
          </a>
          <a href="#">
            <button>M2</button>
          </a>
          <a href="#">
            <button>M3</button>
          </a>
          <a href="#">
            <button>M4</button>
          </a>
          <a href="#">
            <button>PI</button>
          </a>
          <a href="#">
            <button>Job Prep</button>
          </a>
        </div>

        <select>
          <option>Web-FT27b</option>
          <option>Web-FT28A</option>
          <option>Web-FT28B</option>
        </select> */}
        <h1>{results[id].name}</h1>
        <p>Author: {results[id].professor}</p>

        <ReactPlayer url={results[id].url} controls></ReactPlayer>
      </div>


      {/* ESTO VA PARA DESPUES DEL LUNES */}
      {/* <div>
        <Link to={`/bootcamp/lecture/${idPrev - 1}`}>
          <button disabled={idPrev === 0 ? true : false}>Prev class</button>
        </Link>
        <Link to={`/bootcamp/lecture/${idNext + 1}`}>
          <button disabled={idNext === results.length - 1 ? true : false}>
            Next class
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default LectureOn;
