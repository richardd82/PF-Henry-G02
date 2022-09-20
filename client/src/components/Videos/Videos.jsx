/* import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import Nav from '../Nav/Nav.jsx';
import s from './Videos.module.css'; */

const Videos = ({ videos }) => {
/* console.log(videos);
  return (
    <div className={s.card}>
      {videos &&
        videos.map(video => {
          return (
            <Link key={video.id} to={`/bootcamp/lecture/${video.id}`}>
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
  ); */
};

export default Videos;
