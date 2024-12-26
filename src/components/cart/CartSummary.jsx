// src/components/cart/CartSummary.jsx
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const CartSummary = ({ items }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } rounded-lg p-6 shadow-sm space-y-4`}
    >
      <h2
        className={`text-lg font-medium ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Order Summary
      </h2>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span
            className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
          >
            Subtotal
          </span>
          <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span
            className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
          >
            Shipping
          </span>
          <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
            ${shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span
            className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
          >
            Tax
          </span>
          <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
            ${tax.toFixed(2)}
          </span>
        </div>
        <div
          className={`border-t pt-2 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex justify-between text-base font-medium">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              Total
            </span>
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/checkout")}
        className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-500 transition-colors"
      >
        Proceed to Checkout
      </motion.button>
    </motion.div>
  );
};

export default CartSummary;
