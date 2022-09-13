import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Pager from "../../components/Pager/Pager.jsx";
import Videos from "../../components/Videos/Videos.jsx";
import Card from "../../components/Card/Card.jsx";
import Nav from "../../components/Nav/Nav";
// Actions
import { getAllVideos, getTodosUsuarios } from "../../redux/actions/index";
import { Link } from "react-router-dom";

const Catalog = ({ user }) => {
	const dispatch = useDispatch();
	const allVideos = useSelector((state) => state.videos.allVideos);
	const users = useSelector((state) => state.users.allUsers);

	useEffect(() => {
		// if (!videos.classes.length && videos.loading === false) {
		dispatch(getAllVideos());
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
		// }
	}, [dispatch]);

	// Pagination handler
	const [currentPage, setCurrentPage] = useState(1);
	const handlePage = (number) => {
		setCurrentPage(number);
	};
	const userValidate = users.find((e) => e.name === user.displayName);
	const loginUserId = userValidate && userValidate.id;

	const videosPerPage = 10,
		indexOfLastVideo = currentPage * videosPerPage,
		indexOfFirstVideo = indexOfLastVideo - videosPerPage,
		currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

	return (
		<div>
			{/* {videos.loading === true ? (
        <h1>Loading</h1>
      ) : ( */}
			<div>
				{/*       <Nav user={user}/> */}
				<Pager
					currentPage={currentPage}
					pageHandler={handlePage}
					itemsPerPage={videosPerPage}
					totalItems={allVideos.length}
				/>
				<div>
					{currentVideos &&
						currentVideos.map((video) => {
							return (
								<div>
									<Link key={video.id} to={`/lecture/${video.id}`}>
										<Card
											id={video.id}
											title={video.name}
											instructor="Martina"
											description={video.description}
										/>
									</Link>
									<FavouriteButton userId={loginUserId} videoId={video.id} />
								</div>
							);
						})}
				</div>
				<Pager
					currentPage={currentPage}
					pageHandler={handlePage}
					itemsPerPage={videosPerPage}
					totalItems={allVideos.length}
				/>
			</div>
			{/* )} */}
		</div>
	);
};

export default Catalog;
