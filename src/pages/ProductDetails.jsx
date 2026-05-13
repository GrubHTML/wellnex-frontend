import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { useParams } from "react-router";
import fallback from "../assets/fall-back-img.png";
import { useCart } from "../hooks/useCart";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    if (!id) return;
    getProductById(id)
      .then((data) => {
        setProduct(data.product);
      })
      .catch((error) => setError("Something error happens in fetching", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading....</div>;
  if (!product) return <div>No product found</div>;
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight text-center mt-20 mb-10">
        Product Details
      </h1>
      <div className="grid grid-cols-2 gap-2 max-w-6xl mx-auto">
        <div className="p-4">
          <img
            src={product.image || fallback}
            alt={product.name}
            className="mx-auto"
          />
        </div>
        <div className="">
          <p className="text-md pb-2 border-b">{product.name}</p>
          <p className="text-lg mt-2 font-bold">&#x09F3; {product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-8 mb-8 px-8 py-3 text-white font-medium
          bg-gray-900 hover:bg-[#0088FF] hover:text-white transition-all duration-300"
          >
            Add To Cart
          </button>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-2 mt-10">
        <p className="text-2xl font-bold">Cart info temprorary</p>
        {cartItems &&
          cartItems.map((cartItem) => (
            <p key={cartItem.id}>
              <p>{cartItem?.name}</p>
              <p>{cartItem?.price}</p>
            </p>
          ))}
      </div>
    </>
  );
};

export default ProductDetails;
