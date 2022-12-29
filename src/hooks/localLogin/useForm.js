import { useState } from 'react';
import { validateForm } from './validateForm';

const initialForm = {
 email: '',
 password: '',
};

export const useForm = () => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
 };

 const handleBlur = (e) => {
  const target = e.target.name;
  const objKey = Object.keys(validateForm(form, target));
  const objValue = Object.values(validateForm(form, target));
  setErrors({
   ...errors,
   [objKey[0]]: objValue[0],
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(validateForm(form, undefined));
  if (errors.email === true && errors.password === true) {
   alert('submitting form');
   console.log(form);
  } else {
   alert('Wrong form');
   console.log('wrong form');
   console.log(errors);
   return;
  }
 };

 return {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
 };
};
