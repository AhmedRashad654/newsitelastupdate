import { createContext, useContext, useState} from "react";

const ContextUser = createContext();

function ContextProvider({ children }) {
  const [openAuth, setOpenAuth] = useState();

  return (
    <ContextUser.Provider value={{openAuth ,setOpenAuth,}}>
      {children}
    </ContextUser.Provider>
  );
}

function useUser() {
  const context = useContext(ContextUser);
  if (context === undefined) {
    throw new Error("proplem in context");
  }
  return context;
}
export {  ContextProvider ,ContextUser, useUser};
