export const createClassErrors = input => {
  let errors = {
    name: '',
    lecture: '',
    moduleId: '',
    cohortId: '',
    error: false,
  };

  if (!input.name) {
    errors.name = 'Dale un nombre a la clase';
    errors.error = true;
  }
  if (!input.moduleId) {
    errors.moduleId = 'Selecciona un módulo';
    errors.error = true;
  }
  if (!input.cohortId) {
    errors.cohortId = 'Selecciona un corte';
    errors.error = true;
  }
  console.log(errors)
  return errors;
};
