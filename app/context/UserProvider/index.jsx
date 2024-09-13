"use client";

import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider value={{ logged, setLogged, setUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
