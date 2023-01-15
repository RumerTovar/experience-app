const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const DgraphLogIn = (form, setLoginError, setUser, setIsOpen) => {
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
  query MyQuery($email: String!, $password: String!) {
    checkAuthorsPassword(email: $email, pwd: $password) {
      email
      firstName
      lastName
    }
  }
`;

 function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, 'MyQuery', {
   email: form.email,
   password: form.password,
  });
 }

 async function startFetchMyQuery() {
  const { errors: error, data } = await fetchMyQuery();
  const { checkAuthorsPassword } = data;

  if (error) {
   return setLoginError('Something went wrong, try again');
  }

  if (!checkAuthorsPassword) {
   return setLoginError('Invalid email or password');
  }

  console.log('here', checkAuthorsPassword);
  window.localStorage.setItem(
   'loggedAppUser',
   JSON.stringify(checkAuthorsPassword)
  );
  setUser(checkAuthorsPassword);
  setIsOpen(false);
 }

 startFetchMyQuery();
};
