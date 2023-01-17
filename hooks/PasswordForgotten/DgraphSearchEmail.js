import { sendRecoveryEmail } from './sendRecoveryEmail';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const DgraphSearchEmail = async (form, setError, setSuccessMessage) => {
 const { email } = form;

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
     query MyQuery($email:String!) {
       queryAuthors(filter: {email: {eq: $email}}) {
         email
       }
     }
   `;

 const checkProvider = `
   query checkProvider($email:String!) {
     getAuthors(email: $email) {
       singInProvider
     }
   }
 `;

 function fetchProvider() {
  return fetchGraphQL(checkProvider, 'checkProvider', { email });
 }

 function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, 'MyQuery', { email });
 }

 async function startFetchMyQuery() {
  const { errors: providerErrors, data: provider } = await fetchProvider();
  const { errors, data } = await fetchMyQuery();
  const { singInProvider } = provider.getAuthors;
  const { queryAuthors } = data;

  if (errors) {
   console.error(errors);
   console.error(providerErrors);
  }

  if (queryAuthors.length === 0) {
   return setError('Email not found');
  } else {
   if (singInProvider !== 'local') {
    return setError('This account was created using a Google/Apple provider.');
   }

   sendRecoveryEmail(email);
   setSuccessMessage(true);
   return setError(false);
  }
 }

 return await startFetchMyQuery();
};
