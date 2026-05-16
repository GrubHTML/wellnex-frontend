import { useEffect, useState } from "react";
import { deleteCart, getCarts } from "../services/cartService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const cartFetch = async () => {
      try {
        const data = await getCarts();
        // console.log(data.cartItems);
        setCartItems(data.cartItems);
      } catch (error) {
        setError(error.message || "something wrong");
      }
    };
    cartFetch();
  }, []);
  // console.log(cartItems);
  const removeFromCart = async (id) => {
    const item = cartItems.find((c) => c.id === id);
    try {
      await deleteCart(id);
      toast.error(
        <p>
          <span className="font-bold">{item?.product?.name} </span>
          has been removed!
        </p>,
      );
    } catch (error) {
      setError(error.message || "something wrong in removing cart item");
    }
  };
  const calculateSubTotal = () => {
    const subTotal = cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.product.price;
    }, 0);
    return subTotal.toFixed(2);
  };
  const calculateTotal = () => {
    const deliveryCharge = 120;
    const packaging = 15;
    const total = Number(calculateSubTotal()) + deliveryCharge + packaging;
    return total.toFixed(2);
  };

  if (error) return <div>Error: {error}</div>;
  return (
    <div className="mt-20 h-screen px-10 py-8 relative">
      <div className="md:grid grid-cols-12 gap-10">
        {/* Left - Shopping Cart (col-span-8) */}
        <div className="col-span-8 px-10 py-8 ">
          <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-200">
            Shopping cart
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-left">
                <th className="py-3 font-normal"></th>
                <th className="py-3 font-normal">Product</th>
                <th className="py-3 font-normal">Price</th>
                <th className="py-3 font-normal">Quantity</th>
                <th className="py-3 font-normal text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => {
                const subtotal = cartItem?.quantity * cartItem?.product?.price;
                return (
                  <tr
                    key={cartItem.id}
                    className="border-b border-gray-100"
                    onClick={() =>
                      navigate(`/aaa/products/${cartItem.product.id}`)
                    }
                  >
                    <td
                      className="py-4 text-gray-400 cursor-pointer"
                      onClick={() => removeFromCart(cartItem.id)}
                    >
                      x
                    </td>
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={cartItem?.product?.image}
                        alt={cartItem?.product?.name}
                        className="w-16 h-20 object-cover"
                      />
                      <span>{cartItem?.product?.name}</span>
                    </td>
                    <td className="py-4">&#2547; {cartItem?.product?.price}</td>
                    <td className="py-4">
                      <input
                        type="number"
                        min="1"
                        value={cartItem?.quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border border-gray-300 w-14 text-center py-1"
                      />
                    </td>
                    <td className="py-4 text-right">
                      &#2547; {subtotal.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Coupon row */}
          <div className="flex justify-between mt-6">
            <div className="flex gap-2">
              <input
                placeholder="Coupon code"
                className="border border-gray-300 px-3 py-1 text-sm"
              />
              <button className="border border-gray-300 px-3 py-1 text-sm">
                Apply coupon
              </button>
            </div>
            <button className="border border-gray-300 px-3 py-1 text-sm text-gray-400">
              ↺ Update cart
            </button>
          </div>
        </div>

        {/* Right - Cart Totals (col-span-4) */}
        <div className="col-span-4 px-10 py-8 ">
          <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-200">
            Cart totals
          </h2>
          <div className="flex justify-between pt-3 pb-2 border-b border-gray-200">
            <span>Subtotal</span>
            <span>&#2547; {calculateSubTotal()}</span>
          </div>
          <div className="flex justify-between py-4 mt-3 border-b border-gray-200">
            <span>Shipping</span>
            <div className="text-right text-sm text-gray-500 flex flex-col gap-1">
              <p>Free shipping</p>
              <p>Delivery Charge: &#2547;120.00</p>
              <p>Packaging: &#2547;15.00</p>
            </div>
          </div>
          <div className="flex justify-between py-4 mt-3 border-b border-gray-200 font-semibold">
            <span>Total</span>
            <span>&#2547; {calculateTotal()}</span>
          </div>
          <button className="mt-15 w-full bg-gray-900 text-white py-3 text-sm hover:bg-gray-600 transition">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
