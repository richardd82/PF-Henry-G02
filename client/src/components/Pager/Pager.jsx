import React from 'react';

const Pager = ({ currentPage, itemsPerPage, totalItems, dispatchHandler }) => {
  // const dispatch = useDispatch();
  // const pageNumbers = [];
  const mockedPageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // Pages creation
  // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // Pagination handlers
  const handlePrevious = e => {
    e.preventDefault();
    // if (currentPage - 1 > 0) {
    //   dispatch(dispatchHandler(currentPage - 1));
    // }
  };

  const handlePagination = (e, number) => {
    e.preventDefault();
    // dispatch(dispatchHandler(number));
  };

  const handleNext = e => {
    e.preventDefault();
    // if (currentPage + 1 <= mockedPageNumbers.length) {
    //   dispatch(dispatchHandler(currentPage + 1));
    // }
  };
  return (
    <div>
      <div>
        {currentPage !== 1 ? (
          <button onClick={e => handlePrevious(e)}>{'<'}</button>
        ) : null}
        {mockedPageNumbers.map(number => (
          <button key={number} onClick={e => handlePagination(e, number)}>
            {number}
          </button>
        ))}
        {currentPage < mockedPageNumbers.length ? (
          <button onClick={e => handleNext(e)}>{'>'}</button>
        ) : null}
      </div>
    </div>
  );
};

export default Pager;
