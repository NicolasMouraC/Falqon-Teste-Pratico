import { ImAirplane } from "react-icons/im";
import { RiCompassFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="flex justify-around py-[20px] bg-darkPurple md:fixed md:left-0 md:top-[50%] md:mt-[-100px] md:flex-col md:h-[300px] md:px-[5px] md:rounded-r-full md:z-20"> 
            <button>
                <ImAirplane color="white" className="rotate-90" size="1.3rem"/>
            </button>
            <button>
                <RiCompassFill className="opacity-60 text-white hover:text-royalBlue hover:opacity-100" size="1.3rem"/>
            </button>
            <button>
                <FaUserAlt className="opacity-60 text-white hover:text-royalBlue hover:opacity-100" size="1.3rem"/>
            </button>
            <button>
                <AiFillHeart className="opacity-60 text-white hover:text-royalBlue hover:opacity-100" size="1.3rem"/>
            </button>
        </nav>
    );
};
export default NavBar;

