import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import Pager from '../../components/Pager/Pager.jsx';
import Videos from '../../components/Videos/Videos.jsx';
// Actions
import { setPageNumber } from '../../redux/actions/catalogActions.js';

const Catalog = () => {
  useEffect(() => {
    return () => {
      setPageNumber(1);
    };
  }, []);

  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.catalog.currentPage);
  const videos = useSelector(state => state.catalog.videos);

  const videosPerPage = 4,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
      <h1>Catalog</h1>
      <SearchBar />
      <Pager
        currentPage={currentPage}
        dispatchHandler={number => dispatch(setPageNumber(number))}
        itemsPerPage={videosPerPage}
        totalItems={videos.length}
      />
      <Videos videos={currentVideos} />
      <Pager
        currentPage={currentPage}
        dispatchHandler={number => dispatch(setPageNumber(number))}
        itemsPerPage={videosPerPage}
        totalItems={videos.length}
      />
    </div>
  );
};

export default Catalog;
