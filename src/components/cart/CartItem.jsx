// src/components/cart/CartItem.jsx
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-center py-6 px-4 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-sm`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-1">
        <h3
          className={`text-sm font-medium ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {item.name}
        </h3>
        <p
          className={`mt-1 text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Size: {item.size}
        </p>
        <p
          className={`mt-1 text-sm font-medium ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center border rounded-md ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <button
            onClick={() =>
              updateQuantity(item.id, item.size, item.quantity - 1)
            }
            className={`p-2 ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <Minus size={16} />
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(item.id, item.size, item.quantity + 1)
            }
            className={`p-2 ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={() => removeItem(item.id, item.size)}
          className={`${
            theme === "dark"
              ? "text-gray-400 hover:text-gray-300"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <X size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
