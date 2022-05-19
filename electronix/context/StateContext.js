import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  //cart state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();

  const [totalPrice, SetTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  return;
  <Context.Provider
    value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
    }}
  >
    {children}
  </Context.Provider>;
};
