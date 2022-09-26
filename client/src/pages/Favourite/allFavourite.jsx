import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Pager from '../../components/Pager/Pager.jsx';
// import Videos from '../../components/Videos/Videos.jsx';
import Card from '../../components/Card/Card.jsx';
import Nav from '../../components/Nav/Nav';
// Actions
import { getFavoritesById, getTodosUsuarios } from '../../redux/actions/index';
import { Link } from 'react-router-dom';

const AllFavourite = ({ user }) => {
  const dispatch = useDispatch();
  
  const users = useSelector(state => state.users.allUsers);
/*   const userValidate = users.find(e => e.name === user.displayName);
  const loginUserId = userValidate && userValidate.id;
  console.log(loginUserId); */
  
let userValidate = ''
if (!user.category) {
    userValidate= users.filter((e) => e.name === user._json.name );
  }else{
    userValidate = users.filter((e) => e.name === user.name );
    }


  //const userValidate = users.find(e => e.name === userId.displayName);
  const loginUserId = userValidate.map(e=>e.id).toString(); 
   const usuario = userValidate[0]

  useEffect(() => {
    dispatch(getFavoritesById(loginUserId));
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }

  }, [dispatch, loginUserId, users.length]);

  const videos = useSelector(state => state.favorites.favorite);
  

  // Pagination handler
  const [currentPage, setCurrentPage] = useState(1);
  const handlePage = number => {
    setCurrentPage(number);
  };

  const videosPerPage = 8,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentVideos = videos && videos.slice(indexOfFirstVideo, indexOfLastVideo);
  ///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
  // dispatch(getTodosUsuarios());
  

  return (
    <div>
      {/* {videos.loading === true ? (
        <h1>Loading</h1>
      ) : ( */}
      <div>
        <Nav user={user} />
        <div className = "c__cards">
          {currentVideos &&
            currentVideos.map(video => {
              console.log(video.id);
              return (
                <div key={video.id}>
                   <Link key={video.id} to={`/lecture/${video.id}`}>
                    <Card
                    video={video}
                    user={usuario}
                      id={video.id}
                      title={video.name}
                      instructor={users.map((x) => {
                        if (x.id === video.userId) {
                          return (
                          <>    
                            <p>
                              {x.name} {x.lastname}
                            </p>
                            </>  
                          );
                        }
                      })}
                      description={video.description}
                    />
                  </Link> 
                </div>
              );
            })}
        </div>
        <Pager
          currentPage={currentPage}
          pageHandler={handlePage}
          itemsPerPage={videosPerPage}
          totalItems={videos && videos.length}
        />
      </div>
    </div>
  );
};

export default AllFavourite;
