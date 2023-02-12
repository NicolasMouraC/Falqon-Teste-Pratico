import headerImg from "../Images/headerImg.webp";
import { FaPlane } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

const Header = () => {
    return (
        <header className="relative h-[600px] md:h-[550px] mb-[30px]">
            <img src={headerImg} alt="" className="w-screen h-[65%] md:bg-cover md:h-[100%]"></img>
            <div className="z-10 px-[20px] absolute bottom-[60px] font-[inter] text-white mx-auto right-0 left-0 md:px-[30px]">
                <div className="font-normal text-[38px] mb-[20px]">
                    <h2 className="drop-shadow-lg">Let's get</h2>
                    <h2 className="drop-shadow-lg">you there...</h2>
                </div>
                <div className="">
                    <div className="grid grid-cols-2">
                        <div className="bg-vividGreen p-[15px]">BOARDING NOW</div>
                        <div className="text-end bg-Black p-[15px]">GATE CLOSES AT 10:00</div>
                    </div>
                    <div className="px-[20px] py-[20px]  bg-Black bg-opacity-80">
                        <div className="grid grid-cols-3">
                            <div>
                                <h3 className="text-[52px] drop-shadow-lg font-light">LHR</h3>
                                <p className="opacity-60">London, England</p>
                            </div>
                            <div className="flex justify-center items-center opacity-50">
                                <AiOutlineLine size="3rem"/>
                                <FaPlane size="2.5rem"/>
                                <AiOutlineLine size="3rem"/>
                            </div>
                            <div>
                                <h3 className="text-[52px] drop-shadow-lg font-light text-end">JFK</h3>
                                <p className="opacity-60 md:text-end">New York City, USA</p>
                            </div>
                        </div>
                        <hr className="my-[15px] opacity-50"/>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex justify-around flex-row">
                                <span className="flex flex-col items-center">
                                    <p className="opacity-60">FLIGHT</p>
                                    <p className="text-[18px]">VA2501</p>
                                </span>
                                <span className="flex flex-col items-center">
                                    <p className="opacity-60">SEAT</p>
                                    <p className="text-[18px]">35a</p>
                                </span>
                                <span className="flex flex-col items-center">
                                    <p className="opacity-60">GATE</p>
                                    <p className="text-[18px]">34B</p>
                                </span>
                            </div>
                            <div className="flex justify-around flex-row">
                                <span className="flex flex-col items-center justify-center">
                                    <p className="opacity-60">DEPARTS</p>
                                    <p className="text-[18px]">10.25</p>
                                </span>
                                <button className="p-[20px] bg-backgroundColor hover:bg-royalBlue text-[14px]">
                                    VIEW BOARDING PASS    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;