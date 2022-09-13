import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import avatar from "../../media/avatar.png";
import github from "../../media/github.png";
import sheet from "../../media/sheet.png";
import "./Clases.css";
import Nav from "../../components/Nav/Nav";
import { clearStateVideos } from "../../redux/actions/index";
import { getVideosById } from "../../redux/actions/index";

const Details = ({ user }) => {
	const dispatch = useDispatch();
	const myLesson = useSelector((state) => state.videos.detailVideos);
  console.log(myLesson)
  // const myLesson = cualquierCosa.map(e => e.videos);
  
	// console.log("ESTO ME LLEGA DE DETAILS:", myLesson);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getVideosById(id));
		return () => dispatch(clearStateVideos());
	}, []);

	const divStyle = {
		borderRadius: "20px",
	};
	return (
		<>
      <Nav user={user} />
			<section className="sectiom__title-modulo">
				<h1>FOUNDATION</h1>
			</section>
			<section className="section__modulo-clases">
				{myLesson &&  (
					<div className="video__clase-full">
						<ReactPlayer
							url={myLesson.link}
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
						<p className="avatar__name-profesor">Prof.: Belen Manterola</p>
					</div>
					<div className="code_review">
						<ReactPlayer
							url={myLesson.link}
							className="videoReactThumb"
						></ReactPlayer>
						<p>Code Review</p>
					</div>
					<div className="code_review">
						<ReactPlayer
							url={myLesson.link}
							className="videoReactThumb"
						></ReactPlayer>
						<p>Material complementario</p>
					</div>
				</article>
			</section>
		</>
	);
};

export default Details;
