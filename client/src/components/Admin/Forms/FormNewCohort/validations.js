export const Validations = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Should create user with name";
  }

  if (input.name.search(/^[a-zA-Zñáéíóúü]*$/)) {
    errors.name = "Only Letters";
  }
};
