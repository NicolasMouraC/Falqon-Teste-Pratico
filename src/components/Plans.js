import hotelImg from "../Images/hotelImg.webp";
import drivingImg from "../Images/drivingImg.webp";
import manImg from "../Images/manImg.webp";
import stateOfLibertyImg from "../Images/stateOfLibertyImg.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

const Plans = () => {
    return (
        <section className="px-[20px]">
            <div className="relative">
                <h2 className="text-lightBlue text-[22px]">Your Plans</h2>
                <button className="absolute top-[-5px] text-[22px] right-[0px] py-[20px] px-[25px] bg-brightPurple text-white rounded-full z-10">
                    +
                </button>
            </div>
            <article className="relative text-white my-[20px]">
                <img className="bg-contain object-cover" src={hotelImg}/>
                <div className="bg-Black-rgba w-[100%] p-[20px] absolute bottom-0">
                    <div className="flex justify-between">
                        <p className="text-[30px] opacity-100">The James Hotel</p>
                        <button type="button" className="bg-gradient-to-r from-royalBlue to-brightPurple px-[10px]">
                            4 NIGHTS
                        </button>
                    </div>
                    <hr className="my-[20px]"/>
                    <div className="flex gap-[10px] items-center">
                        <FaMapMarkerAlt />
                        <p>36 W 38th St, New York, NY 10018</p>
                    </div>
                </div>
            </article>
            <article className="relative text-white my-[20px]">
                <img className="bg-contain objext-cover" src={drivingImg}/>
                <div className="bg-Black-rgba w-[100%] h-[100%] bottom-0 absolute p-[20px]">
                    <div className="flex flex-col">
                        <div className="flex gap-[20px]">
                            <img className="border rounded-full border-white max-h-[50px]" src={manImg}/>
                            <p className="text-[18px] mr-[40px]">Ryan from Corey Car Services is confirmed for pickup at <span className="text-vividGreen">15:40</span>.</p>
                        </div>
                        <div className="flex mt-[20px]">
                            <div className="flex flex-col">
                                <span className="border-2 border-white rounded-full p-[10px]">
                                    <span className="bg-lightBlue rounded-full text-transparent text-center">btn</span>
                                </span>
                                <span className="border-l-2 border-white h-[70px] m-auto"></span>
                                <span className="border-2 border-white rounded-full p-[10px]">
                                    <span className="bg-brightPurple rounded-full text-transparent">btn</span>
                                </span>
                            </div>
                            <div className="flex justify-between flex-col">
                                <div>
                                    <h3 className="text-[26px]">Pickup</h3>
                                    <p>Jonh F. Kennedy International Airport</p>
                                </div>
                                <div>
                                    <h3 className="text-[26px]">Destination</h3>
                                    <span>
                                        <p>36W 38th Street</p>
                                        <p>New York, NY 10018</p>
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col">
                                <button className="bg-brightPurple rounded-full p-[15px]">
                                    <FaPen color="white" size="1.3rem"/>
                                </button>
                                <button className="bg-brightPurple rounded-full p-[15px]">
                                    <FaPen color="white" size="1.3rem"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="relative text-white my-[20px]">
                <img className="bg-contain object-cover" src={stateOfLibertyImg}/>
                <div className="bg-Black-rgba w-[100%] p-[20px] absolute bottom-0">
                    <p className="text-[30px] opacity-100">Lady Liberty Tour</p>
                    <hr className="my-[20px] opacity-50"/>
                    <div className="flex gap-[10px] items-center">
                        <BsClockFill />
                        <p>Thursday 4th Jan at 09:15</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Plans;