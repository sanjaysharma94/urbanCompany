import { createContext } from "react";
import { useState } from "react";
export const ItemContext = createContext();
export const ItemContextProvider = ({ children }) => {
  const [item, setItem] = useState(0);
  const handleitem = (value) => {
    setItem(item + +value);
  };
  return (
    <ItemContext.Provider value={{ item, handleitem }}>
      {children}
    </ItemContext.Provider>
  );
};
