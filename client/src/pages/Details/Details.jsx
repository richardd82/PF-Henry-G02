import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessonsById, clearState } from "../../redux/actions/detailActions";
import { useParams } from "react-router-dom";
import avatar from "../../media/avatar.png";
import github from "../../media/github.png";
import sheet from "../../media/sheet.png";
import "./Clases.css";

// const Details = () => {
//   const [lectureOn, setLectureOn] = useState(false);

//   return (
//     <div>
//       {myLesson.length > 0 ? (
//         <div>
//           <h1>ESTO ES DETAILS</h1>
//           <h1>{myLesson[0].name}</h1>

//           <div>
//             <ReactPlayer url={myLesson[0].lectureLink} controls></ReactPlayer>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <span>L</span>
//           <span>O</span>
//           <span>A</span>
//           <span>D</span>
//           <span>I</span>
//           <span>N</span>
//           <span>G</span>
//         </div>
//       )}
//     </div>
//   );
// };
const Details = () => {
  const dispatch = useDispatch();
  const myLesson = useSelector((state) => state.details.detalle);
  console.log("ESTO ME LLEGA DE DETAILS:", myLesson);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getLessonsById(id));
    return dispatch(clearState());
  }, []);

  const divStyle = {
    borderRadius: "20px",
  };
  return (
    <>
      <section className="sectiom__title-modulo">
        <h1>FOUNDATION</h1>
      </section>
      <section className="section__modulo-clases">
        {myLesson.length > 0 && (
          <div className="video__clase-full">
            <ReactPlayer
              url={myLesson[0].lectureLink}
              controls
              // height="100%"
              // width="100%"
              className="videoReact"
            ></ReactPlayer>
          </div>
        )}
        <article>
          <p className="clase__title">{myLesson[0].name}</p>
          <div>
            <img src={github} alt="" />
            <img src={sheet} alt="" />
          </div>
          <div className="clase__title-desc">Descripción</div>
          <p className="clase__detalle">{myLesson[0].description}</p>
          <div className="clase__profesor">
            <img className="avatar__profesor" src={avatar} alt="" />
            <p className="avatar__name-profesor">Prof.: Belen Manterola</p>
          </div>
          <div className="code_review">
            <ReactPlayer url={myLesson[0].codeReviewLink}></ReactPlayer>
            <p>Code Review</p>
          </div>
          <div className="code_review">
            <ReactPlayer url={myLesson[0].codeReviewLink}></ReactPlayer>
            <p>Material complementario</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Details;
