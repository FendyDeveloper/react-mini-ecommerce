import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, title }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-extrabold tracking-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          } mb-6`}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
