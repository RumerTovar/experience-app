import { DgraphLogIn } from './DgraphLogIn';

const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;

export const DgraphSignUp = (data, setProfile, setIsOpen, setLoginError) => {
 async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(endpoint, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    query: operationsDoc,
    variables: variables,
    operationName: operationName,
   }),
  });

  return await result.json();
 }

 const operationsDoc = `
   mutation MyMutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
     addAuthors(input: {firstName: $firstName, lastName: $lastName, email: $email, singInProvider: Google, simpleUser: true, collaborator: false, superUser: false, active: true, pwd: $password}) {
       authors {
         email
       }
     }
   }
   `;

 function executeMyMutation() {
  const { email, family_name, given_name, sub: password } = data;

  return fetchGraphQL(operationsDoc, 'MyMutation', {
   firstName: given_name,
   lastName: family_name,
   email: email,
   password: password,
  });
 }

 async function startExecuteMyMutation() {
  const { errors: error, data: registerData } = await executeMyMutation();

  if (error) {
   console.log('error', error);
  }

  // do something great with this precious data
  DgraphLogIn(data, setProfile, setIsOpen, setLoginError);
  console.log('console', registerData);
 }

 startExecuteMyMutation();
};