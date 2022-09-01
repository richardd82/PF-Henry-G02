import React from 'react';
import Card from '../Card/Card';

const Videos = ({ videos }) => {
  return (
    <div>
      {videos &&
        videos.map((video, idx) => {
          return (
            <Card
              key={idx}
              title={video.title}
              instructor={video.instructor}
              cohort={video.cohort}
            />
          );
        })}
    </div>
  );
};

export default Videos;
