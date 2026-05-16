import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const CartInformation = () => {
  const { cartItems } = useCart();
  return (
    <div className="relative group inline-block">
      {/* cart icon on navbar */}
      <FaShoppingCart className="cursor-pointer  text-gray-800 hover:text-[#0088FF] h-5 w-5" />
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
