// src/components/products/ProductCard.jsx
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const handleAddToCart = () => {
    addToCart(product, 1, "M");
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-sm p-4`}
    >
      <Link to={`/products/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="mt-4">
          <h3
            className={`text-sm font-medium ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {product.name}
          </h3>
          <div className="mt-1 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviewCount})
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.discount ? (
                <>
                  <span className="text-sm line-through text-gray-500">
                    ${product.originalPrice}
                  </span>
                  <span className="ml-2 text-lg font-medium text-red-600">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${product.price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
