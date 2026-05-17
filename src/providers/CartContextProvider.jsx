import { useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import {
  addToCart,
  deleteCart,
  getCarts,
  updateCart,
} from "../services/cartService";
import { useAuth } from "../hooks/useAuth";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  // fetch all carts according to user
  useEffect(() => {
    if (!token) return;
    const cartFetch = async () => {
      try {
        const data = await getCarts();
        // console.log(data);
        setCartItems(data.cartItems);
      } catch (error) {
        setError(error.message || "something wrong");
      }
    };
    cartFetch();
  }, [token]);

  // add to cart
  const addToCartFn = async (id) => {
    try {
      await addToCart(id);
      const data = await getCarts(); // refetch after adding
      setCartItems(data.cartItems);
      toast.success("Product added to the cart!");
    } catch (error) {
      setError(error.messageror || "fetching cart error");
    }
  };

  // remove cart
  const removeFromCart = async (id) => {
    const item = cartItems.find((c) => c.id === id);
    setCartItems((prev) => prev.filter((c) => c.id !== id));
    try {
      await deleteCart(id);
      toast.error(
        <p>
          <span className="font-bold">{item?.product?.name} </span>
          has been removed!
        </p>,
      );
    } catch (error) {
      const data = await getCarts();
      setCartItems(data.cartItems);
      setError(error.message || "something wrong in removing cart item");
    }
  };

  // updating cart
  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      // optimistic update of the UI before the API call
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: Number(newQuantity) }
            : item,
        ),
      );
      await updateCart(cartItemId, Number(newQuantity));
    } catch (error) {
      setError(error.message);
      await getCarts();
    }
  };

  const cartInfo = {
    cartItems,
    addToCartFn,
    removeFromCart,
    updateQuantity,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
