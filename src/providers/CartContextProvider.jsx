import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartData = localStorage.getItem("cart");
    return storedCartData ? JSON.parse(storedCartData) : [];
  });

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      toast.info("This product already in cart!");
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev, product];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
    toast.success(
      <p>
        <span className="font-bold">{product.name}</span> added in cart
        successfully!
      </p>,
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
    toast.error("Product removed from cart!");
  };

  const cartInfo = { cartItems, addToCart, removeFromCart };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
