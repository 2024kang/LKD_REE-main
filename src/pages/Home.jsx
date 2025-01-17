import PicCarousel from "../componentsJSX/PicCarousel";
import Filterbar from "../componentsJSX/Filterbar";
import PromotionSection from "../componentsJSX/PromotionSection";
import Rank from "../componentsJSX/Rank";
import Area from "../componentsJSX/Area";
import Weather from "../componentsJSX/Weather";
import Redeye from "../componentsJSX/Redeye";
import Loader from "../componentsJSX/Loader";
import MyGoogleMap from "../componentsJSX/MyGoogleMap"; // Corrected import

const Home = () => {
  return (
    <>
      <PicCarousel />
      <Filterbar />
      <PromotionSection />
      <Rank />
      <Area />
      <Weather />
      {/* <Redeye /> */}
      <MyGoogleMap />
    </>
  );
};

export default Home;
