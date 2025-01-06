import Navbar from "./components/navbar";
import SliderContainer from "./components/SliderContainer/sliderContainer";
import OfferProducts from "./components/OfferProductsContainer/offerProductsContainer";

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <SliderContainer />
        <OfferProducts/>
    </div>
  );
}
