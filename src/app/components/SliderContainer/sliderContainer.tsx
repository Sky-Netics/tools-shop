import Slider from "../Slider/slider";
import Image from "next/image";
import banner1 from '../../../../public/assets/banner-ss1.png'
import banner2 from '../../../../public/assets/banner-ss2.png'

const SliderContainer = () => {
    return ( 
        <div className="flex justify-center layout gap-4 max-lg:flex-col py-10 px-6 max-sm:px-2 max-sm:py-6">
            <div className="">
                <Slider/>
            </div>
            
        <div className="flex flex-col max-lg:flex-row justify-center gap-2">

            <div className="rounded-md">
                <Image src={banner1} alt="banner1 image" className="w-72 object-cover rounded-md"/> 
            </div>

            <div className="rounded-md">
                <Image src={banner2} alt="banner2 image" className="w-72 object-cover rounded-md"/>
            </div>

            </div>

        </div>
     );
}

export default SliderContainer;