import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos &&
        videos.map(video => {
          return (
            <Link to='/bootcamp/lecture/1'>
              <Card
                key={video.id}
                title={video.name}
                instructor={video.instructor}
                cohort={video.cohortId}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Videos;
