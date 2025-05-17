import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data); // Directly using response.data since it's an array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-center">Product List</h2>
      <ol className="text-center w-1/2 mx-auto">
        {products.map((product) => (
          <li className="flex gap-10" key={product.id}>
            <strong>Product Name-{product.name}</strong> - ${product.price * product.quantity} <br />
            {product.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProductList;
