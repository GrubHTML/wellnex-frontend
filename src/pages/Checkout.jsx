import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { Trash2 } from "lucide-react";

import bkashIcon from "../assets/bkash.png";
import codIcon from "../assets/cod.png";
import onlinepayIcon from "../assets/online-pay.png";
import paypal from "../assets/paypal.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { cartItems, calculateSubTotal, calculateTotal, removeFromCart } =
    useCart();

  return (
    <div className="mt-20 px-10 py-8">
      <h2 className="text-2xl font-bold mb-8">
        <Link to="/cart">Cart </Link>
        &gt; Checkout Page
      </h2>

      <div className="md:grid grid-cols-12 gap-10 md:place-content-center">
        {/* Left - Shipping Form */}
        <div className="col-span-6 ">
          <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-gray-200">
            Shipping Address
          </h3>

          <div className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-600 transition"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-600 transition">
                <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-300 text-sm text-gray-700">
                  <span>🇧🇩</span>
                  <span>+880</span>
                </div>
                <input
                  type="tel"
                  placeholder="••••••••"
                  className="flex-1 px-4 py-2.5 text-sm outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                Email address (optional)
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-600 transition"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter your full address"
                rows={3}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-600 transition resize-none"
                required
              />
            </div>

            {/* Order Notes */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                Order notes (optional)
              </label>
              <textarea
                placeholder="share your notes"
                rows={3}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-gray-600 transition resize-none"
              />
            </div>
          </div>

          {/* Place Order Button */}

          <button className="mt-5 mb-10 w-full rounded-full text-white py-3 text-sm bg-gray-900 hover:bg-gray-600 transition-all duration-300">
            Place Order
          </button>
        </div>

        {/* Right - Order Summary */}
        <div className="col-span-6">
          <div className="bg-[#f0f7ff] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-center mb-2 pb-4 border-b border-gray-200">
              Your order
            </h3>

            {/* Product Row */}
            {cartItems &&
              cartItems.map((cartItem) => {
                return (
                  <div
                    key={cartItem.id}
                    className="flex justify-between items-center mb-2 py-2 px-2 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={cartItem?.product?.image}
                        alt={cartItem?.product?.name}
                        className="w-15 h-15 border border-gray-300 object-cover rounded-lg p-1.5"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-gray-800 text-sm">
                          {cartItem?.product?.name}
                        </p>
                        <div className="flex flex-col gap-1 text-xs text-gray-600">
                          <span>Quantity: {cartItem?.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Trash2
                        className="text-gray-600 cursor-pointer h-4 w-4"
                        onClick={() => removeFromCart(cartItem.id)}
                      />
                    </div>
                  </div>
                );
              })}

            {/* Payment Method */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="font-semibold text-gray-800 mb-3">How you'll pay</p>
              <div className="grid grid-cols-2 gap-3">
                {/* Cash on Delivery */}
                <label
                  className={`flex items-center gap-3 cursor-pointer border-2 rounded-xl px-4 py-3 transition-all
      ${paymentMethod === "cod" ? "border-sky-500 bg-[#FOF7FF]" : "border-gray-200 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="hidden"
                  />
                  <img
                    src={codIcon}
                    alt="Cash on Delivery"
                    className="h-7 w-7"
                  />
                  <span className="font-semibold text-sm text-gray-800">
                    Cash On Delivery
                  </span>
                  {paymentMethod === "cod" && (
                    <span className="ml-auto bg-[#0088FF] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </span>
                  )}
                </label>

                {/* Online Payment */}
                <label
                  className={`flex items-center gap-3 cursor-pointer border-2 rounded-xl px-4 py-3 transition-all
      ${paymentMethod === "online" ? "border-sky-500 bg-[#FOF7FF]" : "border-gray-200 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="hidden"
                  />
                  <img
                    src={onlinepayIcon}
                    alt="Online Payment"
                    className="h-7 w-7"
                  />
                  <span className="font-semibold text-sm text-gray-800">
                    Online Payment
                  </span>
                  {paymentMethod === "online" && (
                    <span className="ml-auto bg-[#0088FF] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </span>
                  )}
                </label>

                {/* Bkash */}
                <label
                  className={`flex items-center gap-3 cursor-pointer border-2 rounded-xl px-4 py-3 transition-all
      ${paymentMethod === "bkash" ? "border-sky-500 bg-[#FOF7FF]" : "border-gray-200 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="bkash"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                    className="hidden"
                  />
                  <img src={bkashIcon} alt="Bkash" className="h-7 w-7" />
                  <span className="font-semibold text-sm text-gray-800">
                    Bkash
                  </span>
                  {paymentMethod === "bkash" && (
                    <span className="ml-auto bg-[#0088FF] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </span>
                  )}
                </label>
                {/* Paypal */}
                <label
                  className={`flex items-center gap-3 cursor-pointer border-2 rounded-xl px-4 py-3 transition-all
      ${paymentMethod === "paypal" ? "border-sky-500 bg-[#FOF7FF]" : "border-gray-200 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="hidden"
                  />
                  <img src={paypal} alt="paypal" className="h-7 w-7" />
                  <span className="font-semibold text-sm text-gray-800">
                    Paypal
                  </span>
                  {paymentMethod === "paypal" && (
                    <span className="ml-auto bg-[#0088FF] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      ✓
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Item(s) total</span>
                <span>&#2547; {calculateSubTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shop discount</span>
                <span className="text-green-600">-$0.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span>Subtotal</span>
                <span>&#2547; {calculateSubTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>&#2547; 120.00 </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-300 font-bold text-gray-900 text-base">
                <span>Total ({cartItems.length} item)</span>
                <span>&#2547; {calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
