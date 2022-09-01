import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Components
import Pager from '../../components/Pager/Pager.jsx';
import Videos from '../../components/Videos/Videos.jsx';

const Catalog = () => {
  useEffect(() => {
    return () => {
      setCurrentPage(1);
    };
  }, []);

  const videos = useSelector(state => state.catalog.videos);
  
  // Pagination handler
  const [currentPage, setCurrentPage] = useState(1);
  const handlePage = (number) => {
    setCurrentPage(number)
  }

  const videosPerPage = 8,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
      <h1>Catalog</h1>
      <Pager
        currentPage={currentPage}
        pageHandler={handlePage}
        itemsPerPage={videosPerPage}
        totalItems={videos.length}
      />
      <Videos videos={currentVideos} />
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
