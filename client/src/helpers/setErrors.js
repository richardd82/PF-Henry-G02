export const setErrors = input => {
  let errors = {
    name: '',
    email: '',
    message: '',
  };

  if (!input.name) errors.name = 'You must enter your name here';
  if (!input.email) errors.email = 'You must enter your email here';
  if (input.email.split('@').length < 2) errors.email = 'Enter a valid email';
  if (!input.message) errors.message = `Don't forget to write your message`;

  return errors;
};
