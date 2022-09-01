import { SET_PAGE_NUMBER } from '../actions/catalogActions';

const initialState = {
  videos: [
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React-Redux',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React-Redux',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React Formularios',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React Formularios',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React Estilos',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React Estilos',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - Redux',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - Redux',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React Hooks',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React Hooks',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - Bundlers',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - Bundlers',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - Módulos',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - Módulos',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React Ciclo de Vida',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React Ciclo de Vida',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - React Routing',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - React Routing',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - Repaso M2',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - Repaso M2',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - DOM Avanzado',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - DOM Avanzado',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - CSS Avanzado',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - CSS Avanzado',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - DOM Selectores',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - DOM Selectores',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - ES6',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - ES6',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Lecture - AJAX',
    },
    {
      instructor: 'Martina',
      cohort: 'FT-20a',
      title: 'Code Review - AJAX',
    },
  ],
  currentPage: 1,
};

export default function catalog(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return { ...state };
  }
}
