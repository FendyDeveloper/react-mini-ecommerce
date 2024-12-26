import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturedProducts from "./components/home/FeaturedProducts";
import ProductDetail from "./components/products/ProductDetail";
import CheckoutForm from "./components/cart/CheckoutForm";
import Cart from "./components/cart/Cart";
import CategoryPage from "./components/category/CategoryPage";
import DealsPage from "./components/deals/DealsPage";
import CheckoutSuccess from "./components/cart/CheckoutSuccess";
import ProfilePage from "./components/profile/ProfilePage";
import { ThemeProvider } from "./context/ThemeContext";

// Main App Component
const App = () => {
  return (
    <CartProvider>
      <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <FeaturedProducts />
                  </>
                }
              />
              <Route path="/products" element={<FeaturedProducts />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </Router>
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
