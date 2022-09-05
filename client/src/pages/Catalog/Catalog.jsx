import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Pager from '../../components/Pager/Pager.jsx';
import Videos from '../../components/Videos/Videos.jsx';
// Actions
import { getAllClasses } from '../../redux/actions/searchBarActions.js';

const Catalog = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.searchBar);

  useEffect(() => {
    if (!videos.classes.length && videos.loading === false) {
      dispatch(getAllClasses());
    }
  }, [videos, dispatch]);

  // Pagination handler
  const [currentPage, setCurrentPage] = useState(1);
  const handlePage = number => {
    setCurrentPage(number);
  };

  const videosPerPage = 10,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos.classes.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
      {videos.loading === true ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={videos.classes.length}
          />
          <Videos videos={currentVideos} />
          <Pager
            currentPage={currentPage}
            pageHandler={handlePage}
            itemsPerPage={videosPerPage}
            totalItems={videos.classes.length}
          />
        </div>
      )}
    </div>
  );
};

export default Catalog;
