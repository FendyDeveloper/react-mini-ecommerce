import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { useTheme } from "../../context/ThemeContext";

const CategoryPage = () => {
  const { category } = useParams();
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category
        );
        setProducts(filteredProducts);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}>
    <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-8 ">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
        {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CategoryPage;
