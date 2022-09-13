import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Pager from '../../components/Pager/Pager.jsx';
import Videos from '../../components/Videos/Videos.jsx';
import Card from '../../components/Card/Card.jsx';
import Nav from '../../components/Nav/Nav'
// Actions
import { getAllVideos } from '../../redux/actions/index';
import { Link } from 'react-router-dom';

const Catalog = ({user}) => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.allVideos);
console.log(videos)

  useEffect(() => {
    // if (!videos.classes.length && videos.loading === false) {
      dispatch(getAllVideos());
    // }
  }, [videos, dispatch]);

  // Pagination handler
  const [currentPage, setCurrentPage] = useState(1);
  const handlePage = number => {
    setCurrentPage(number);
  };

  const videosPerPage = 10,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
      {/* {videos.loading === true ? (
        <h1>Loading</h1>
      ) : ( */}
        <div>

        <Nav user={user}/>
            <h1>ESTA ES LA PAGINA QUE MUESTRA LOS VIDEOS</h1>
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={videos.classes.length}
          />
          <div>
            {currentVideos &&
              currentVideos.map(video => {
                return (
                  <Link key={video.id} to={`/lecture/${video.id}`}>
                    <Card
                      id={video.id}
                      title={video.name}
                      instructor="Martina"
                      description={video.description}
                    />
                  </Link>
                );
              })}
          </div>
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={videos.classes.length}
          />
        </div>
      {/* )} */}
    </div>
  );
};

export default Catalog;
