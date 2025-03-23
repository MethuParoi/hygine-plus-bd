import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/ui/Loader/Loader";

const Products = () => {
  const { fetching, setFetching } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setFetching(true);
        const products = await getProducts();
        setData(Array.isArray(products) ? products : []);
        setFetching(false);
      } catch (error) {
        setFetching(false);
        console.error("Error fetching products:", error);
        setData([]);
      }
    };

    fetchProducts();
  }, []);

  if (fetching) {
    return (
      <div className="min-h-screen ">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.length > 0
        ? data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : !fetching && (
            <p className="text-2xl font-semibold text-center mt-32">
              No products available
            </p>
          )}
    </div>
  );
};

export default Products;
