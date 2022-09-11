export const Validations = (input) => {
  //NAME:

  let errors = {};
  if (!input.name) {
    errors.name = "Should create user with name";
  }

//   if (input.name.search(/^[a-zA-Zñáéíóúü]*$/)) {
//     errors.name = "Only Letters";
//   }
  if (!input.category) {
    errors.category = "Should put a user role";
  }

  if (
    input.category !== "admin" ||
    input.category !== "student" ||
    input.category !== "ta" ||
    input.category !== "teacher"
  ) {
    errors.category = "User role must be admin, student, ta or teacher.";
  }
};
