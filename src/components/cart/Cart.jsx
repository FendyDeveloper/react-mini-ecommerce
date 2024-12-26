import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

const Cart = () => {
  const { theme } = useTheme();
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div
        className={`min-h-screen pt-20 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-600">
              Add some items to your cart to continue shopping
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
    className={`min-h-screen ${
      theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-900"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`text-2xl font-semibold text-gray-900 mb-8 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
        Shopping Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
