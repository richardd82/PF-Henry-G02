import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideos } from "../../redux/actions";
import Card from "../Card/Card";
import FavouriteButton from "../FavouriteComponents/favouriteButton";
import Pager from "../Pager/Pager";


export default function CatalogTeacher({user}){
    const dispatch = useDispatch();
    const allVideos = useSelector((state) => state.videos.videos);
   // const videos = allVideos.filter(e => e.userId === user.name ? e.userId : e.userId === user._json.name)
let videos = ''
    if (!user.category) {
         videos = allVideos.filter((e) => e.userId === user._json.name );
      }else{
        videos = allVideos.filter((e) => e.userId === user.name );
        }

    useEffect(() => {
        dispatch(getAllVideos());
      }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (number) => {
      setCurrentPage(number);
    };
  
    const videosPerPage = 10,
      indexOfLastVideo = currentPage * videosPerPage,
      indexOfFirstVideo = indexOfLastVideo - videosPerPage,
      currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    return (
        <>
        <div>
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
                      <Link key={video.id} to={`/lecture/${video.id}`}>
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
        </>
    )
}