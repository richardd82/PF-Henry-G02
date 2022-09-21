import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import avatar from "../../media/avatar.png";
import github from "../../media/github.png";
import sheet from "../../media/sheet.png";
import "./Clases.css";
import Nav from "../../components/Nav/Nav";
import {
  clearStateVideos,
  getAllVideos,
  getCohorts,
  getTodosUsuarios,
} from "../../redux/actions/index";
import { getVideosById } from "../../redux/actions/index";

const Details = ({ user }) => {
  const dispatch = useDispatch();
  const myLesson = useSelector((state) => state.videos.allVideos);
  const myUsers = useSelector((state) => state.users.allUsers);
  const myCohorts = useSelector((state) => state.cohorts.allCohorts)


  const myLessonMapped = myLesson.filter((e) => e.type === "lecture");
  const codeReviews = myLesson.filter((e) => e.type === "code-review");

  const myLessonClass = myLessonMapped.map((e) => e.classId);
  const codeReviewsMapped = codeReviews.map((e) => e.classId);
  // console.log(codeReviews);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getVideosById(id));
    dispatch(getTodosUsuarios());
    dispatch(getCohorts());
    return () => dispatch(clearStateVideos());
  }, []);

  const divStyle = {
    borderRadius: "20px",
  };
  return (
    <>
      <Nav user={user} />
      {myLesson.map((e) => {
        if (e && window.location.pathname === `/lecture/${e.id}`) {
          return (
            <>
              <section className="sectiom__title-modulo">
                <h1>FOUNDATION</h1>
              </section>
              <section className="section__modulo-clases">
                {myLesson && (
                  <div className="video__clase-full">
                    <ReactPlayer
                      url={e.link}
                      controls
                      className="videoReact"
                    ></ReactPlayer>
                  </div>
                )}
                <article>
                  <div>
                    <img src={github} alt="" />
                    <img src={sheet} alt="" />
                  </div>

                  <div className="clase__profesor">
                    <img className="avatar__profesor" src={avatar} alt="" />
                    <p className="avatar__name-profesor">
                      {myUsers.map((x) => {
                        if (x.id === e.userId) {
                          return (
                          <>    
                            {x.name} {x.lastname}
                            {/* <p>{e.name}</p> */}
                            </>  
                          );
                        }
                      })}
                    </p>
                  </div>

                  {/* ///////////CODE-REVIEW///////////////// */}

                  {codeReviewsMapped.map((x) => {
                    if (x === e.classId) {
                      const codereviewlinked = codeReviews.filter(
                        (c) => c.classId === e.classId
                      );
                      const link = codereviewlinked.map((codeId) => codeId.id);

                      const video = codereviewlinked
                        .map((linkId) => linkId.link)
                        .toString();
                      // console.log("asddddddddddd", video);

                      return (
                        <div className="code_review">
                          <div>
                            <Link to={`/code-review/${link}`}>
                              <ReactPlayer
                                className="videoReactThumb"
                                url={video}
                              />{" "}
                              <button>Code Review</button>
                            </Link>
                          </div>
                        </div>
                      );
                    }
                  })}
                </article>
              </section>
            </>
          );
        } else if (e && window.location.pathname === `/code-review/${e.id}`) {
          return (
            <>
              <section className="sectiom__title-modulo">
                <h1>FOUNDATION</h1>
              </section>
              <section className="section__modulo-clases">
                {myLesson && (
                  <div className="video__clase-full">
                    <ReactPlayer
                      url={e.link}
                      controls
                      className="videoReact"
                    ></ReactPlayer>
                  </div>
                )}
                <article>
                  <div>
                    <img src={github} alt="" />
                    <img src={sheet} alt="" />
                  </div>

                  <div className="clase__profesor">
                    <img className="avatar__profesor" src={avatar} alt="" />
                    <p className="avatar__name-profesor">
                      {myUsers.map((x) => {
                        if (x.id === e.userId) {
                          return (
                            <>
                            <p>
                              {x.name} {x.lastname}
                            </p>
                            <p>{e.name}</p>
                            </> 
                          );
                        }
                      })}
                    </p>
                  </div>
                  <div className="code_review">
                    {myLessonClass.map((l) => {
                      console.log(myLessonClass);
                      if (l === e.classId) {
                        const lectureLinked = myLessonMapped.filter(
                          (le) => le.classId === e.classId
                        );

                        const link = lectureLinked.map(
                          (lectureId) => lectureId.id
                        );

                        const video = lectureLinked
                          .map((linkId) => linkId.link)
                          .toString();

                        return (
                          <div>
                            <Link to={`/lecture/${link}`}>
                              <ReactPlayer
                                url={video}
                                className="videoReactThumb"
                              ></ReactPlayer>
                              <button>Lecture</button>
                            </Link>
                          </div>
                        );
                      }
                    })}
                  </div>
                </article>
              </section>
            </>
          );
        }
      })}
    </>
  );
};

export default Details;
