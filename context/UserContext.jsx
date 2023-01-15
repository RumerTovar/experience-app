import { createContext, useEffect, useState } from 'react';
const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
 const [user, setUser] = useState({});
 useEffect(() => {
  const mylocal = window.localStorage.getItem('loggedAppUser');
  if (mylocal) {
   const loggedUser = JSON.parse(mylocal);
   setUser(loggedUser);
  }
 }, []);

 const contextData = { setUser, user };

 return (
  <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
 );
};
