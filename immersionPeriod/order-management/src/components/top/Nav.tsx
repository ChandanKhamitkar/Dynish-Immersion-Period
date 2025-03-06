import { FaArrowLeft } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";

export default function Nav() {
    return (
        <div className="w-full flex justify-between items-center text-black">

            {/* back Navigator */}
            <div className="w-9 h-9 bg-[#D9D9D9]/[0.4] rounded-full flex justify-center items-center cursor-pointer">
                <FaArrowLeft size={12}/>
            </div>

            {/* Title */}
            <div className="flex justify-center items-center space-x-3">
                <p className="font-medium tracking-wide">
                    Manage Orders
                </p>
                <div className="w-3 h-3 bg-[#00C951] rounded-full"></div>
            </div>

            {/* Settings */}
            <LuSettings className="text-[#696969] cursor-pointer" size={20}/>
        </div>
    )
};
