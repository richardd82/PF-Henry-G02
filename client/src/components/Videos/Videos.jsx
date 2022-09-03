import React from 'react';
import Card from '../Card/Card';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos &&
        videos.map((video) => {
          return (
            <Card
              key={video.id}
              title={video.name}
              instructor={video.instructor}
              cohort={video.cohortId}
            />
          );
        })}
    </div>
  );
};

export default Videos;
