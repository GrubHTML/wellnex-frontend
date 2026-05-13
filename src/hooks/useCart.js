import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const customCartHook = useContext(CartContext);
  if (!customCartHook)
    throw new Error("App should be wrap with CartContextProvider");
  return customCartHook;
};
