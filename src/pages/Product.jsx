import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import fallback from "../assets/fall-back-img.png";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

//   {
//     img: lipikar,
//     name: "Lipikar surgras soap bar - LA ROCHE",
//     price: "€7.20",
//     rating: 5,
//     reviews: 2,
//   },

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

const Product = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { setLoading } = useAuth();

  useEffect(() => {
    getProducts()
      .then((data) => {
        // console.log(data);
        setProducts(data.products);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight text-center mt-20">
        Our Products
      </h1>
      {/* {user && <h2>{user?.username}</h2>}
      {user && <h1>{user?.id}</h1>} */}
      <div className="flex flex-wrap gap-6 justify-center p-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-56 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <Link to={`/aaa/products/${product.id}`}>
              {/* Image */}
              <div className="bg-gray-50 flex items-center justify-center p-4 h-52">
                <img
                  src={product.image || fallback}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-sm text-gray-700 leading-snug mb-2">
                  {product.name}
                </p>
                <p className="text-base font-bold text-gray-900 mb-1">
                  {product.price}
                </p>
                <div className="flex items-center gap-1">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
