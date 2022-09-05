import React from 'react';
import resultados from '../../assets/resultados.jpeg';
import s from './Card.module.css';

const Card = ({ id, title, instructor, description }) => {
  return (
    <div key={id} className={s.card}>
      <div className={s.cardHeader}>
        <img src={resultados} alt="video-thumbnail" />
      </div>
      <div className={s.cardBody}>
        <span className={`s.tag s.tagTeal`}>{title}</span>
        <p>{description}</p>
        <div className={s.userInfo}>
          <h5>{instructor}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
