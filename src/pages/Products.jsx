import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "../utils/apiProduct";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setData(Array.isArray(products) ? products : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setData([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;
