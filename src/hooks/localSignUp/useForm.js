import { useState } from 'react';
import { validateForm } from './validateForm';

const initialForm = {
 firstName: '',
 lastName: '',
 country: 'United States',
 email: '',
 password: '',
 confirmPassword: '',
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
  if (
   errors.firstName === true &&
   errors.lastName === true &&
   errors.email === true &&
   errors.password === true &&
   errors.confirmPassword === true
  ) {
   alert('submitting form');
   /*
This is an example snippet - you should consider tailoring it
to your service.
*/

   async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
     'https://blue-surf-790015.us-east-1.aws.cloud.dgraph.io/graphql',
     {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'X-Auth-Token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4ODI5ODc3MzA4IiwiZXhwIjoxNjcyMjUxOTM1LCJpc3MiOiJzL2FwaSJ9.I8lBX69vS7uqVvTUZ4J4yHvvcJXqsLCb6BvLBj4TgeU',
      },
      body: JSON.stringify({
       query: operationsDoc,
       variables: variables,
       operationName: operationName,
      }),
     }
    );

    return await result.json();
   }

   const operationsDoc = `
  mutation MyMutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addAuthors(input: {firstName: $firstName, lastName: $lastName, email: $email, singInProvider: Local, simpleUser: true, collaborator: false, superUser: false, active: true, password: $password}) {
      authors {
        email
        id
      }
    }
  }
`;

   function executeMyMutation() {
    return fetchGraphQL(operationsDoc, 'MyMutation', {
     firstName: form.firstName,
     lastName: form.lastName,
     email: form.email,
     password: form.password,
    });
   }

   async function startExecuteMyMutation() {
    const { errors, data } = await executeMyMutation();

    if (errors) {
     // handle those errors like a pro
     const errorMessage =
      "couldn't rewrite mutation addAuthors because failed to rewrite mutation payload because id rumertovar7474@gmail.com already exists for field email inside type Authors";

     if (errors[0].message === errorMessage)
      return alert('rumertovar7474@gmail.com already exists');

     console.log(errors);
    }

    // do something great with this precious data
    console.log(data);
   }

   startExecuteMyMutation();
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
