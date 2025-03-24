import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/ui/Loader/Loader";
import { useParams } from "react-router";
import img from "../assets/hero/hero.jpg";
import SortProduct from "../components/products/SortProduct";

const Products = () => {
  const { fetching, setFetching } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);
  const { main_category } = useParams();
  console.log("category", main_category);

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

  useEffect(() => {
    window.scrollTo(0, 0);
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
      {/* banner */}
      <div className="md:col-span-3 lg:col-span-4">
        <img
          className="w-[100%] h-[20rem] md:h-[40rem] object-fill md:object-fill 2xl:object-cover"
          src={img}
          alt=""
        />
      </div>
      {/* sorting option */}
      <div className="lg:block">
        {" "}
        <SortProduct />
      </div>
      <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1 className="text-2xl font-semibold text-center mt-32">
            No Products Found!
          </h1>
        )}
      </div>
    </div>

    // <div>
    //   <div className="py-[1rem]">
    //     <img
    //       className="w-[100%] h-[20rem] md:h-[40rem] object-fill md:object-fill 2xl:object-cover"
    //       src={img}
    //       alt=""
    //     />
    //     <div className="mt-[1rem] flex items-centerjustify-between relative">
    //       <h1 className="text-[1.6rem] lg:text-[2rem] font-semibold pl-[2rem] mt-[1.2rem]">
    //         All products
    //       </h1>

    //       <div className="absolute right-1 top-[-1rem] z-20 xl:hidden">
    //         <SortProduct />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-5  mt-[4rem] mb-[8rem]">
    //     <div className="hidden xl:block xl:w-[22rem] 2xl:w-[26rem]">
    //       <div className="border-b-2 border-gray-300 mr-[2rem] py-[.5rem]">
    //         <h1 className="text-[1.8rem] font-semibold">Filter items</h1>
    //       </div>

    //       <SortProduct />
    //     </div>
    //     <div className="col-span-5 xl:col-span-4 xl:mr-[5rem]">
    //       {data.length > 0 ? (
    //         data.map((product) => (
    //           <ProductCard key={product.id} product={product} />
    //         ))
    //       ) : (
    //         <Loader />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Products;
