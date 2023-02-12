import { FaTaxi } from "react-icons/fa";
import { MdTrain } from "react-icons/md";

const TravelInfo = () => {
    return (
        <section className="px-[20px] md:px-[30px]">
            <article className="relative text-white my-[20px] bg-gradient-to-r from-royalBlue to-brightPurple w-full p-[20px]">
                <div>
                    <span className="flex">
                        <p className="text-lightBlue bg-white p-[15px]">From</p>
                        <input placeholder="JFK Airport" className="text-darkPurple placeholder:text-darkPurple w-full"/>
                    </span>
                    <span className="flex mt-[10px]">
                        <p className="text-lightBlue bg-white p-[15px]">To</p>
                        <input placeholder="36 W 38th St, New York, NY 1008" className="text-darkPurple placeholder:text-darkPurple w-full"/>
                    </span>
                </div>
                <hr className="my-[20px] opacity-40"/>
                <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                        <button className="bg-brightPurple hover:bg-backgroundColor p-[20px] rounded-full mb-[10px]">
                            <FaTaxi color="white" className="md:text-[2rem]"/>
                        </button>
                        <span className="flex flex-col items-center">
                            <p>$65-$105</p>
                            <p>TAXI</p>
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-lightBlue hover:bg-backgroundColor p-[20px] rounded-full mb-[10px]">
                            <MdTrain color="white" className="md:text-[2rem]"/>
                        </button>
                        <span className="flex flex-col items-center opacity-60">
                            <p>$20-$30</p>
                            <p>SUBWAY</p>
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-blue-600 hover:bg-backgroundColor p-[20px] rounded-full mb-[10px]">
                            <FaTaxi color="white" className="md:text-[2rem]"/>
                        </button>
                        <span className="flex flex-col items-center opacity-60">
                            <p>$45-$65</p>
                            <p>UBER</p>
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-slate-500 hover:bg-backgroundColor p-[20px] rounded-full mb-[10px]">
                            <FaTaxi color="white" className="md:text-[2rem]"/>
                        </button>
                        <span className="flex flex-col items-center opacity-60">
                            <p>$45-$65</p>
                            <p>UBER</p>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    );
;}

export default TravelInfo;