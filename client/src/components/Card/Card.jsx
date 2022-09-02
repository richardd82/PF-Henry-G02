import React from 'react';
import Profile from '../../assets/blank-profile-picture.png';
import Thumbnail from '../../assets/video-thumbnail.png';

const Card = ({ title, instructor, cohort, picture }) => {
  return (
    <div>
      <img src={Thumbnail} alt="video-thumbnail" />
      <div>
        <h3>{title}</h3>
        <div>
          <img src={Profile} alt="profile-pic" />
          <p>{instructor}</p>
        </div>
        <p>{cohort}</p>
      </div>
    </div>
  );
};

export default Card;
