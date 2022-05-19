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

  const increaseQty = () => {
    setQty((previousQty) => previousQty + 1);
  };

  const decreaseQty = () => {
    setQty((previousQty) => {
      if (previousQty === 1) return 1; //if qty is LESS THAN 1, do nothing
      return previousQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//this function allows us to easily grab the states in other components
export const useStateContext = () => useContext(Context);
