import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Order Successful!
        </h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. We'll send you a confirmation email
          shortly.
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
