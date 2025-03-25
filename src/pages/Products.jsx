import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts, getSortedProducts } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/ui/Loader/Loader";
import { useParams } from "react-router";
import img from "../assets/hero/hero.jpg";
import SortProduct from "../components/products/SortProduct";

const Products = () => {
  const { fetching, setFetching, selectedCategory } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);
  const { main_category } = useParams();
  // console.log("category", main_category);

  //fetch all products
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

  //fetch sorted products

  const fetchSortedProducts = async (category) => {
    try {
      // setFetching(true);
      const products = await getSortedProducts(category);
      setSortedData(Array.isArray(products) ? products : []);
      // setFetching(false);
    } catch (error) {
      // setFetching(false);
      console.error("Error fetching products:", error);
      setSortedData([]);
    }
  };

  useEffect(() => {
    fetchSortedProducts(selectedCategory);
  }, [selectedCategory]);

  if (fetching) {
    return (
      <div className="min-h-screen ">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" min-h-screen mb-20">
      {/* banner */}
      <div className="">
        <img
          className="w-[100%] h-[20rem] md:h-[40rem] object-fill md:object-fill 2xl:object-cover"
          src={img}
          alt=""
        />
      </div>
      {/* product cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center md:mt-10">
        {/* sorting option */}
        <div className="lg:block">
          <SortProduct />
        </div>
        <div className="lg:col-span-2 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 sm:gap-y-8 sm:gap-x-5 justify-items-center md:mt-10">
          {data.length > 0 && sortedData.length === 0 ? (
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : sortedData.length > 0 ? (
            sortedData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3">
              <h1 className="text-2xl font-semibold text-center mt-32">
                No Products Found!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
