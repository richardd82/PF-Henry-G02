import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import s from './Videos.module.css';

const Videos = ({ videos }) => {
  return (
    <div className={s.card}>
      {videos &&
        videos.map(video => {
          return (
            <Link to='/bootcamp/lecture/50c750e6-7368-4bb6-be53-d4cc674c7165'>
              <Card
                key={video.id}
                title={video.name}
                instructor="Martina"
                description={video.description}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Videos;
