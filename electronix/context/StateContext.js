import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const context = createContext();

export const StateContext = ({ children }) => {
  //cart state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(false);
};
