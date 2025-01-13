import SliderContainer from "../components/SliderContainer/sliderContainer";
import OfferProducts from "../components/OfferProductsContainer/offerProductsContainer";
import Category from "../components/Category/category";
import ElectricProductsContainer from "../components/ElectricProductsContainer/electricProductsContainer";
import Discount from "../components/Discount/discount";
import LatestProductsContainer from "../components/latestProductsContainer/LatestProductsContainer";
import BlogPostsContainer from "../components/BlogPostsContainer/BlogPostsContainer";

export default function Home() {
  return (
    <div>
        <SliderContainer />
        <OfferProducts/>
        <Category />
        <ElectricProductsContainer/>
        <Discount/>
        <LatestProductsContainer/>
        <BlogPostsContainer/>
    </div>
  );
}
