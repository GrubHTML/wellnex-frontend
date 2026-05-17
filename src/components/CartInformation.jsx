import { useCart } from "../hooks/useCart";
import { ShoppingCart } from "lucide-react";

const CartInformation = () => {
  const { cartItems } = useCart();
  return (
    <div className="relative group inline-block">
      {/* cart icon on navbar */}
      <ShoppingCart className="cursor-pointer h-6 w-6" />
      {cartItems?.length > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-red-500 text-white 
      text-xs w-4 h-4 rounded-full flex items-center justify-center"
        >
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default CartInformation;
