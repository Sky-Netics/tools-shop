import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SliderContainer from "./components/SliderContainer/sliderContainer";
import OfferProducts from "./components/OfferProductsContainer/offerProductsContainer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Footer />
        <SliderContainer />
        <OfferProducts/>
    </div>
  );
}
