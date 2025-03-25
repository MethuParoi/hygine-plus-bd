import FactoryImg from "../components/home/FactoryImg";
import VideoSection from "../components/home/VideoSection";
import LastMonthStart from "../components/home/LastMonthStart";
import NewArrival from "../components/home/NewArrival";
import NewCollection from "../components/home/NewCollection";
import PartnersSection from "../components/home/OurPartners";
import ShopByCatagory from "../components/home/ShopByCatagory";
import { getProducts } from "../utils/apiProduct";
import Hero from "../components/home/Hero";
import CustomerReview from "../components/home/CustomerReview";
import SimpleChoices from "../components/home/SimpleChoices";
import StatsSection from "../components/home/StatsSection";
import LimitedTimeOffer from "../components/home/LimitedTimeOffer";

const Home = () => {
  // Fetch products from the database once in a day 86400000
  setInterval(() => {
    getProducts();
  }, 86400000);
  return (
    <div className="overflow-x-hidden">
      <Hero></Hero>
      <ShopByCatagory></ShopByCatagory>
      <LimitedTimeOffer></LimitedTimeOffer>
      <VideoSection></VideoSection>
      <LastMonthStart></LastMonthStart>
      <NewCollection></NewCollection>
      <SimpleChoices></SimpleChoices>
      <FactoryImg></FactoryImg>
      <PartnersSection></PartnersSection>
      <StatsSection></StatsSection>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
