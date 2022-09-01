import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import Pager from '../../components/Pager/Pager.jsx';
import Card from '../../components/Card/Card.jsx';

const mockedVideos = [
  {
    thumbnail: `https://setevalapinsap.com/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png`,
    instructor: 'Martina',
    cohort: 'FT-20a',
    title: 'Lecture - React',
  },
  {
    thumbnail: `https://setevalapinsap.com/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png`,
    instructor: 'Martina',
    cohort: 'FT-20a',
    title: 'Code Review - React',
  },
  {
    thumbnail: `https://setevalapinsap.com/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png`,
    instructor: 'Martina',
    cohort: 'FT-20a',
    title: 'Lecture - React-Redux',
  },
  {
    thumbnail: `https://setevalapinsap.com/wp-content/plugins/wp-ulike/assets/img/no-thumbnail.png`,
    instructor: 'Martina',
    cohort: 'FT-20a',
    title: 'Code Review - React-Redux',
  },
];

const Catalog = () => {
  return (
    <div>
      <h1>Catalog</h1>
      <SearchBar />
      <Pager />
      <div>
        {mockedVideos.map((video, idx) => {
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
      <Pager />
    </div>
  );
};

export default Catalog;
