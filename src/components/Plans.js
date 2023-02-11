import hotelImg from "../Images/hotelImg.webp";
import drivingImg from "../Images/drivingImg.webp";
import manImg from "../Images/manImg.webp"
import { FaMapMarkerAlt } from "react-icons/fa";

const Plans = () => {
    return (
        <section className="relative px-[20px]">
            <h2 className="text-lightBlue text-[22px]">Your Plans</h2>
            <button className="absolute top-[0px] text-[22px] right-[0px] py-[20px] px-[25px] bg-brightPurple text-white rounded-full z-10">
                +
            </button>
            <article className="relative text-white my-[20px]">
                <img className="bg-contain object-cover" src={hotelImg}/>
                <div className="bg-black-rgba w-[100%] p-[20px] absolute bottom-0">
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
                <div className="bg-black-rgba w-[100%] h-[100%] bottom-0 absolute p-[20px]">
                    <div className="flex flex-col">
                        <div className="flex gap-[10px]">
                            <img className="border rounded-full border-white max-h-[60px]" src={manImg}/>
                            <p className="text-[20px]">Ryan from Corey Car Services is confirmed for pickup at <span className="text-vividGreen">15:40</span>.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Plans;