import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CreditCard, Wallet } from "lucide-react";

const PAYMENT_METHODS = {
  BANK_TRANSFER: {
    category: "Bank Transfer",
    options: [
      { id: "bca", name: "BCA", accountNo: "1234567890" },
      { id: "mandiri", name: "Mandiri", accountNo: "0987654321" },
      { id: "bni", name: "BNI", accountNo: "1122334455" },
      { id: "bri", name: "BRI", accountNo: "5544332211" },
    ],
  },
  E_WALLET: {
    category: "E-Wallet",
    options: [
      { id: "gopay", name: "GoPay" },
      { id: "ovo", name: "OVO" },
      { id: "dana", name: "DANA" },
      { id: "shopeepay", name: "ShopeePay" },
    ],
  },
};

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Navigate to success page
      navigate("/checkout/success");
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {/* Bank Transfer */}
              <div>
                <button
                  onClick={() => setSelectedPayment("BANK_TRANSFER")}
                  className={`w-full flex items-center justify-between p-4 border rounded-lg ${
                    selectedPayment === "BANK_TRANSFER"
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300 hover:border-indigo-500"
                  }`}
                >
                  <div className="flex items-center">
                    <CreditCard className="h-6 w-6 text-gray-400" />
                    <span className="ml-3 font-medium">Bank Transfer</span>
                  </div>
                </button>
                {selectedPayment === "BANK_TRANSFER" && (
                  <div className="mt-3 ml-8 space-y-3">
                    {PAYMENT_METHODS.BANK_TRANSFER.options.map((bank) => (
                      <label
                        key={bank.id}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="radio"
                          name="bank"
                          value={bank.id}
                          checked={selectedMethod === bank.id}
                          onChange={(e) => setSelectedMethod(e.target.value)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {bank.name} - {bank.accountNo}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* E-Wallet */}
              <div>
                <button
                  onClick={() => setSelectedPayment("E_WALLET")}
                  className={`w-full flex items-center justify-between p-4 border rounded-lg ${
                    selectedPayment === "E_WALLET"
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300 hover:border-indigo-500"
                  }`}
                >
                  <div className="flex items-center">
                    <Wallet className="h-6 w-6 text-gray-400" />
                    <span className="ml-3 font-medium">E-Wallet</span>
                  </div>
                </button>
                {selectedPayment === "E_WALLET" && (
                  <div className="mt-3 ml-8 space-y-3">
                    {PAYMENT_METHODS.E_WALLET.options.map((wallet) => (
                      <label
                        key={wallet.id}
                        className="flex items-center space-x-3"
                      >
                        <input
                          type="radio"
                          name="wallet"
                          value={wallet.id}
                          checked={selectedMethod === wallet.id}
                          onChange={(e) => setSelectedMethod(e.target.value)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {wallet.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-600">
                  {item.name} (x{item.quantity})
                </span>
                <span className="text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-base font-medium">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedMethod}
            className={`mt-6 w-full py-3 px-4 rounded-md text-white text-sm font-medium
              ${
                selectedMethod
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
