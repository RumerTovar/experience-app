export const validateForm = (form, target) => {
 let errors = {};
 let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 let regexPassword = /^.{6,12}$/;

 const emailValidation = () => {
  if (!form.email.trim()) {
   errors.email = 'Email cannot be empty';
  } else if (!regexEmail.test(form.email.trim())) {
   errors.email = 'Looks like this is not an email';
  } else {
   errors.email = true;
  }
 };

 const passwordValidation = () => {
  if (!form.password.trim()) {
   errors.password = 'Password cannot be empty';
  } else if (!regexPassword.test(form.password.trim())) {
   errors.password = 'The password must contain at least 6 digits, maximum 12';
  } else {
   errors.password = true;
  }
 };

 const validateAll = () => {
  emailValidation();
  passwordValidation();
 };

 const selectValidation = (target) => {
  const validations = {
   email: emailValidation,
   password: passwordValidation,
   undefined: validateAll,
  };
  const select = validations[target];

  return select();
 };

 selectValidation(target);

 return errors;
};
