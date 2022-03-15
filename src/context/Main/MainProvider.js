import { useState, createContext } from "react";

const simplStateDefault = {
  simpleValue: 88,
};

export const MainContext = createContext();

export default ({ children }) => {
  const [simpleState, setSimpleState] = useState(simplStateDefault);
  return (
    <MainContext.Provider value={{ simpleState, setSimpleState }}>
      {children}
    </MainContext.Provider>
  );
};
