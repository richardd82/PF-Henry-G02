// import React from "react";
// import {useDispatch} from "react-redux"
// import { useParams} from "react-router-dom";
// import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";

// const CodeReviewOn = ({ handleEvent }) => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const idNext = parseInt(id);
//   const idPrev = parseInt(id);



//   return (
//     <div>
//       <button onClick={(e) => handleEvent(false)}>Lecture</button>
//       <div>
//         <h2>Code Review clase {results[id].name}</h2>

//         <h1>{results[id].name}</h1>
//         <p>Author: {results[id].professor}</p>
//         <ReactPlayer url={results[id].codeReview} controls></ReactPlayer>
//       </div>
//       <div>
//         <Link to={`/bootcamp/lecture/${idPrev - 1}`}>
//           <button disabled={idPrev === 0 ? true : false}>Prev class</button>
//         </Link>
//         <Link to={`/bootcamp/lecture/${idNext + 1}`}>
//           <button disabled={idNext === results.length - 1 ? true : false}>
//             Next class
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CodeReviewOn;
