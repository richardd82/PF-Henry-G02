export const Validations = (input) => {
    //NAME:
  
    let errors = {};
  
    if (!input.name) {
      errors.name = "Should create user with name";
    }
  
    if (input.name.search(/^[a-zA-Zñáéíóúü]*$/)) {
      errors.name = "Only Letters";
    }
  
    //EMAIL:
  
    if (!input.email) {
      errors.email = "Should create user with email";
    }
  
    //LASTNAME:
  
    if (!input.lastname) {
      errors.lastname = "Should create user with lastname";
    }
  
    //CATEGORY:
  
    if (!input.category) {
      errors.category = "Should put a user role";
    }
  
  
  
    return errors;
  };