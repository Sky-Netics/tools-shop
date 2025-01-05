import Slider from "../Slider/slider";

const SliderContainer = () => {
    return ( 
        <div className="mx-[150px] my-14 h-fit bg-gray-200 flex">
            <div className="w-[940px] ml-4">
                <Slider/>
            </div>

            <div className="flex flex-col justify-between">

                <div className="w-[300px] h-[193px] bg-red-500 rounded-md">

                </div>

                <div className="w-[300px] h-[193px] bg-green-500 rounded-md">

                </div>

            </div>
            
        </div>
     );
}

export default SliderContainer;