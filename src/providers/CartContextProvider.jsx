import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";

const CartContextProvider = ({ children }) => {
  const cartInfo = {};
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
