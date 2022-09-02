export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const setPageNumber = number => {
  return {
    type: SET_PAGE_NUMBER,
    payload: number,
  };
};