import React from 'react';

const Pager = ({ currentPage, itemsPerPage, totalItems, dispatchHandler }) => {
  const pageNumbers = [];

  // Pages creation
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage - 1 > 0) {
      dispatchHandler(currentPage - 1);
    }
  };

  const handlePagination = number => {
    dispatchHandler(number);
  };

  const handleNext = () => {
    if (currentPage + 1 <= pageNumbers.length) {
      dispatchHandler(currentPage + 1);
    }
  };
  return (
    <div>
      <div>
        {currentPage !== 1 ? (
          <button onClick={() => handlePrevious()}>{'<'}</button>
        ) : null}
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handlePagination(number)}>
            {number}
          </button>
        ))}
        {currentPage < pageNumbers.length ? (
          <button onClick={() => handleNext()}>{'>'}</button>
        ) : null}
      </div>
    </div>
  );
};

export default Pager;
