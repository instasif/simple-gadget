import img from "../../assets/images/ccCamera.jpg"
import { BsStopwatch } from 'react-icons/bs';
const About = () => {
    return (
        <div className="lg:pt-5">
            <h1 className="text-2xl lg:pb-4 lg:text-4xl font-bold text-center">About</h1>
            <div className="relative">
                <img src={img} className="lg:h-[440px] w-[1320px]" alt="" />
                <div className="absolute top-1 lg:top-14 left-4 lg:left-[660px]">
                    <h1 className="text-xl lg:text-4xl font-bold ">Why Choose Us?</h1>
                    <div className="flex px-3 gap-2 items-center lg:pt-5  lg:gap-3">
                        <div className="h-[35px] w-[60px] lg:h-20 lg:w-32 rounded-full bg-white flex justify-center items-center cursor-pointer hover:border-slate-500 border-2">
                            <BsStopwatch className="text-2xl lg:text-5xl font-bold hover:text-slate-500 "/>
                        </div>
                            <p className="text-[13px] lg:text-xl font-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, asperiores nam! Sint, nihil iste?</p>
                    </div>
                    <div className="flex px-3 gap-2 items-center lg:pt-5  lg:gap-3">
                        <div className="h-[35px] w-[60px] lg:h-20 lg:w-32 rounded-full bg-white flex justify-center items-center cursor-pointer hover:border-slate-500 border-2">
                            <BsStopwatch className="text-2xl lg:text-5xl font-bold hover:text-slate-500 "/>
                        </div>
                            <p className="text-[13px] lg:text-xl font-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, asperiores nam! Sint, nihil iste?</p>
                    </div>
                    <div className="flex px-3 gap-2 items-center lg:pt-5  lg:gap-3">
                        <div className="h-[35px] w-[60px] lg:h-20 lg:w-32 rounded-full bg-white flex justify-center items-center cursor-pointer hover:border-slate-500 border-2">
                            <BsStopwatch className="text-2xl lg:text-5xl font-bold hover:text-slate-500 "/>
                        </div>
                            <p className="text-[13px] lg:text-xl font-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, asperiores nam! Sint, nihil iste?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;