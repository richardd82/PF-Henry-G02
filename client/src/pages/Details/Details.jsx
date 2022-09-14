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
import { clearStateVideos, getAllVideos } from "../../redux/actions/index";
import { getVideosById } from "../../redux/actions/index";
//import CodeReviewOn from "./ConditionalRender/CodeReviewOn";

const Details = ({ user }) => {
  const dispatch = useDispatch();
  const myLesson = useSelector((state) => state.videos.allVideos);
  console.log(myLesson);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getVideosById(id));
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
                      Prof.: Belen Manterola
                    </p>
                  </div>
                  <div className="code_review">
                    {myLesson.map((e) => {
                      if (e.type === "code-review") {
                        return (
                          <div>
                            {" "}
                            <Link to={`/codeReview/${e.id}`}>
                              <ReactPlayer
                                url={e.link}
                                className="videoReactThumb"
                              ></ReactPlayer>
                              <button>Code Review</button>
                            </Link>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="code_review">
                    {/* <CodeReviewOn></CodeReviewOn> */}
                    <ReactPlayer
                      url={e.link}
                      className="videoReactThumb"
                    ></ReactPlayer>
                    <p>Material complementario</p>
                  </div>
                </article>
              </section>
            </>
          );
        } else if (e && window.location.pathname === `/codeReview/${e.id}`) {
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
                      Prof.: Belen Manterola
                    </p>
                  </div>
                  <div className="code_review">
                    {myLesson.map((e) => {
                      if (e.id === "3cf3d422-b0fc-4d38-8ff9-cbb06eba0f54") {
                        return (
                          <div>
                            {" "}
                            <Link to={`/lecture/${e.id}`}>
                              <ReactPlayer
                                url={e.link}
                                className="videoReactThumb"
                              ></ReactPlayer>
                              <button>Lecture</button>
                            </Link>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div className="code_review">
                    {/* <CodeReviewOn></CodeReviewOn> */}
                    <ReactPlayer
                      url={e.link}
                      className="videoReactThumb"
                    ></ReactPlayer>
                    <p>Material complementario</p>
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
