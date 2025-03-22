import FactoryImg from "../components/home/FactoryImg";
import Hero from "../components/home/Hero";
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
      <Hero></Hero>
      <ShopByCatagory></ShopByCatagory>
      <NewArrival></NewArrival>
      <NewCollection></NewCollection>
      <FactoryImg></FactoryImg>
    </div>
  );
};

export default Home;
