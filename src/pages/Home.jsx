import Hero from "../components/home/Hero";
import LastMonthStart from "../components/home/LastMonthStart";
import NewArrival from "../components/home/NewArrival";
import NewCollection from "../components/home/NewCollection";
import ShopByCatagory from "../components/home/ShopByCatagory";
import { getProducts } from "../utils/apiProduct";

const Home = () => {
  // Fetch products from the database once in a day 86400000
  setInterval(() => {
    getProducts();
  }, 10000);
  return (
    <div className="overflow-x-hidden">
      <Hero />

      <ShopByCatagory />
      <LastMonthStart />
      {/* <NewArrival /> */}
    </div>
  );
};

export default Home;
