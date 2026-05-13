import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const CartInformation = () => {
  const { cartItems } = useCart();
  return (
    <div className="relative group inline-block">
      {/* cart icon on navbar */}
      <FaShoppingCart className="cursor-pointer  text-gray-800 hover:text-[#0088FF] h-5 w-5" />
      {cartItems.length > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-red-500 text-white 
      text-xs w-4 h-4 rounded-full flex items-center justify-center"
        >
          {cartItems.length}
        </span>
      )}
      {/* dropdown */}
      <div
        className="w-90 overflow-y-scroll absolute right-0 mt-2 bg-white rounded-xl shadow-lg p-3
      opacity-0 scale-95 translate-y-2
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
      transition-all duration-200 ease-out
      pointer-events-none group-hover:pointer-events-auto"
      >
        <p className="font-bold text-md border-b py-1">Your cart's Items</p>
        {cartItems &&
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <img src={cartItem?.image} alt={cartItem?.name} />
              <p>Product Name: {cartItem?.name}</p>
              <p>Product Price: {cartItem?.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartInformation;
