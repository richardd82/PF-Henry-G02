import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Pager from "../../components/Pager/Pager.jsx";
import Videos from "../../components/Videos/Videos.jsx";
import Card from "../../components/Card/Card.jsx";
import Nav from "../../components/Nav/Nav";
// Actions
import { getAllVideos } from "../../redux/actions/index";
import { getTodosUsuarios } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import FavouriteButton from "../../components/FavouriteComponents/favouriteButton.jsx";

const Catalog = ({ user }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);
  const users = useSelector((state) => state.users.allUsers);
  const userValidate = users.find((e) => e.name === user.displayName);
  const loginUserId = userValidate && userValidate.id;
  const videosMapped = videos.map((e) => e.userId)
  const usersMapped = users.map((e) => e.id)
  const teacher = users.filter(e=> e.category === 'teacher')
  const userName = teacher.map((e)=> e.name)
  const userLastname = teacher.map((e)=> e.lastname)
  const userCohort = teacher.map(e => e.cohortId)
 /*  const filtered = userCohort.find(r=> r === video.cohortId)
  const instructor = teacher.filter(e => e.cohortId === filtered) */
  
  useEffect(() => {
    // if (!videos.classes.length && videos.loading === false) {
    dispatch(getAllVideos());
    // }
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch]);

  // Pagination handler
  const [currentPage, setCurrentPage] = useState(1);
  const handlePage = (number) => {
    setCurrentPage(number);
  };

  const videosPerPage = 10,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
/*      
  const instructor = userCohort.map(e=> e).filter(r=> r === videos.cohortId);
 console.log(instructor); */

  return (
      <div>
        <Nav user={user} />
        <Pager
          currentPage={currentPage}
          pageHandler={handlePage}
          itemsPerPage={videosPerPage}
          totalItems={videos.length}
        />
        <div>
          {currentVideos &&
            currentVideos
              .sort((a, b) => {
                const aDate = new Date(a.createdAt);
                const bDate = new Date(b.createdAt);
                return aDate - bDate;
              })
              .map((video) => {
                return (
                  <div>
                  
                    <Link key={video.id} to={`/${video.type}/${video.id}`}>
                      <Card
                        id={video.id}
                        title={video.name}
                        instructor={video.userId}
                        description={video.description}
                      />
                    </Link>
                    <FavouriteButton userId={user} videoId={video.id} />
                  </div>
                );
              })}
        </div>
        <Pager
          currentPage={currentPage}
          pageHandler={handlePage}
          itemsPerPage={videosPerPage}
          totalItems={videos.length}
        />
      </div>

  );
};

export default Catalog;
