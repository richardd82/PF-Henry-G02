import React from 'react';
import s from './Pager.module.css';

const Pager = ({ currentPage, itemsPerPage, totalItems, pageHandler }) => {
  const pageNumbers = [];

  // Pages creation
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage - 1 > 0) {
      pageHandler(currentPage - 1);
    }
  };

  const handlePagination = number => {
    pageHandler(number);
  };

  const handleNext = () => {
    if (currentPage + 1 <= pageNumbers.length) {
      pageHandler(currentPage + 1);
    }
  };
  return (
    <div className={s.pager}>
      <div className={s.pagination}>
        {currentPage !== 1 ? (
          <span onClick={() => handlePrevious()}>{'<'}</span>
        ) : null}
        {pageNumbers.map(number => (
          <span key={number} onClick={() => handlePagination(number)}>
            {number}
          </span>
        ))}
        {currentPage < pageNumbers.length ? (
          <span onClick={() => handleNext()}>{'>'}</span>
        ) : null}
      </div>
    </div>
  );
};

export default Pager;
