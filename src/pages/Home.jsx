import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">
                Rp {product.price.toLocaleString()}
              </p>
              <a
                href={`/product/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 mt-2 inline-block rounded hover:bg-blue-600"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
