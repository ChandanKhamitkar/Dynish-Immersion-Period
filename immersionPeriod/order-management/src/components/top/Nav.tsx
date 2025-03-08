import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import RippleDot from "./RippleDot";

export default function Nav() {
    return (
        <div className="w-full px-6 flex justify-between items-center text-black">

            {/* Left Section (Back Button + Title) */}
            <div className="flex items-center space-x-3">
                {/* Back Navigator */}
                <div className="w-9 h-9 bg-[#D9D9D9]/[0.4] rounded-full flex justify-center items-center cursor-pointer">
                    <FaChevronLeft size={14} className="opacity-80 text-gray-800" />
                </div>

                {/* Title */}
                <div className="flex items-center space-x-3">
                    <p className="font-semibold tracking-wide text-sm sm:text-lg">
                        Live Orders
                    </p>
                    <RippleDot/>
                </div>
            </div>

            {/* User */}
            <HiOutlineUser className="cursor-pointer text-gray-700" size={28} />
        </div>
    );
}
