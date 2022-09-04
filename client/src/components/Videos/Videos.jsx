import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos &&
        videos.map(video => {
          return (
            <Link to='/bootcamp/lecture/50c750e6-7368-4bb6-be53-d4cc674c7165'>
              <Card
                key={video.id}
                title={video.name}
                instructor="Martina"
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Videos;
