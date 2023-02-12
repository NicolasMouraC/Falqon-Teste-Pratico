import { ImAirplane } from "react-icons/im";
import { RiCompassFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="flex justify-around py-[20px] bg-darkPurple"> 
            <button>
                <ImAirplane color="white" className="rotate-90" size="1.3rem"/>
            </button>
            <button>
                <RiCompassFill className="opacity-60" color="white" size="1.3rem"/>
            </button>
            <button>
                <FaUserAlt className="opacity-60" color="white" size="1.3rem"/>
            </button>
            <button>
                <AiFillHeart className="opacity-60" color="white" size="1.3rem"/>
            </button>
        </nav>
    );
};
export default NavBar;

