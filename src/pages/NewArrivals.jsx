import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getProducts, getSortedProducts } from "../utils/apiProduct";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/ui/Loader/Loader";
import { useParams } from "react-router";
import bgImage from "/images/new-arrival-banner.jpg";
const NewArrivals = () => {
  const { fetching, setFetching, selectedCategory } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);
  const { main_category } = useParams();

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

  if (fetching) {
    return (
      <div className="min-h-screen ">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" min-h-screen mb-20 md:mb-32">
      {/* banner */}
      <div
        className="h-[50dvh] w-full max-w-full flex items-center text-white overflow-hidden "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-11/12 mx-auto mt-20">
          <div className="text-center mb-42">
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ">
              NEW ARRIVAL
            </h1>
            <p className="text-md text-center md:text-xl text-gray-50">
              Redifine your home with our unique Bathware & Kitchenware{" "}
              <br className="hidden md:block"></br> collection, craffted for
              modern living.
            </p>
          </div>
        </div>
      </div>
      {/* product cards */}

      <div className="w-11/12 mx-auto lg:col-span-2 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 sm:gap-y-8 sm:gap-x-5 justify-items-center mt-10 md:mt-20">
        {data.length > 0 ? (
          data.map((product) => (
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
  );
};

export default NewArrivals;
