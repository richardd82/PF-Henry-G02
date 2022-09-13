export const setVideoErrors = input => {
    let errors = {
      name: '',
      link: '',
      type: '',
      cohortId: '',
      userId: '',
      error: false,
    };
  
    if (!input.name) {
      errors.name = 'Dale un nombre al vídeo';
      errors.error = true;
    }
    if (!input.cohortId) {
      errors.cohortId = 'Selecciona un corte';
      errors.error = true;
    }
    if (!input.link) {
      errors.link = 'Añade un link al vídeo';
      errors.error = true;
    }
    if (!input.userId) {
      errors.userId = 'Selecciona un profesor';
      errors.error = true;
    }
    if (!input.type) {
      errors.type = 'Selecciona un tipo de vídeo';
      errors.error = true;
    }
  
    return errors;
  };