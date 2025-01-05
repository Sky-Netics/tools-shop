import Slider from "../Slider/slider";
import Image from "next/image";
import banner1 from '../../../../public/assets/banner-ss1.png'
import banner2 from '../../../../public/assets/banner-ss2.png'

const SliderContainer = () => {
    return ( 
        <div className="mx-[150px] my-6 h-fit flex max-xl:mx-[30px] max-[890px]:flex-col">
            <div className="w-[940px] ml-4 max-[890px]:w-[100%] max-[890px]:mb-5 flex">
                <Slider/>
            </div>
            
        <div className="flex flex-col gap-2 justify-between max-[890px]:flex-row">

            <div className="w-[300px] h-[193px] rounded-md max-lg:h-[145px]">
                <Image src={banner1} alt="banner1 image" className="h-full object-cover rounded-md"/> 
            </div>

            <div className="w-[300px] h-[193px] rounded-md max-lg:h-[145px]">
                <Image src={banner2} alt="banner2 image" className="h-full object-cover rounded-md"/>
            </div>

            </div>

        </div>
     );
}

export default SliderContainer;