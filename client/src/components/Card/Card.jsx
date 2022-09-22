import React from 'react';
import resultados from '../../assets/resultados.jpeg';
import FavouriteButton from '../FavouriteComponents/favouriteButton';
import './Card.css';
const Card = ({ id, title, instructor, description, user, video }) => {
  console.log(video);
  return (
    <div key={id} className="card">
      <div className="cardHeader">
        <img src={resultados} alt="video-thumbnail" />
      </div>
      <div className="cardBody">
        <span className={"tag tagTeal"}>{title}</span>
        {/* <p>{description} hola que tal como estas</p> */}
        <div className="userInfo">
          <h6>{instructor}</h6>
        </div>
        <div className= "c__favorito" z-index="10000">
        <FavouriteButton user={user} userId={user.id} videoId={video.id}/>
        </div>
      </div>
    </div>
  );
};
export default Card;










