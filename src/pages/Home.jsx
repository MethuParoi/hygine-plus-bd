import FactoryImg from "../components/home/FactoryImg";
import VideoSection from "../components/home/VideoSection";
import LastMonthStart from "../components/home/LastMonthStart";
import NewArrival from "../components/home/NewArrival";
import NewCollection from "../components/home/NewCollection";
import PartnersSection from "../components/home/OurPartners";
import ShopByCatagory from "../components/home/ShopByCatagory";
import { getProducts } from "../utils/apiProduct";
import Hero from "../components/home/Hero";

const Home = () => {
  // Fetch products from the database once in a day 86400000
  setInterval(() => {
    getProducts();
  }, 10000);
  return (
    <div className="overflow-x-hidden">
      <Hero></Hero>
      <ShopByCatagory></ShopByCatagory>
      <VideoSection></VideoSection>
      <NewArrival></NewArrival>
      <LastMonthStart></LastMonthStart>
      <NewCollection></NewCollection>
      <FactoryImg></FactoryImg>
      <PartnersSection></PartnersSection>
    </div>
  );
};

export default Home;
