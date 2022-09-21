import React from 'react';
import resultados from '../../assets/resultados.jpeg';
import './Card.css';

const Card = ({ id, title, instructor, description }) => {
  return (
    <div key={id} className="card">
      <div className="cardHeader">
        <img src={resultados} alt="video-thumbnail" />
      </div>
      <div className="cardBody">
        <span className={"tag tagTeal"}>{title}</span>
        {/* <p>{description} hola que tal como estas</p> */}
        <div className="userInfo">
          <h6>{instructor} Martina Scomazzon</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
