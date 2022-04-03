import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const handlecart = (value) => {
    setCart(cart + +value);
  };
  return (
    <CartContext.Provider value={{ cart, handlecart }}>
      {children}
    </CartContext.Provider>
  );
};
