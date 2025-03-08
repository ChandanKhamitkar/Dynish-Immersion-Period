import { IoSearch } from "react-icons/io5";
import { TabContext } from "@/context/TabContext";
import { useContext } from "react";
import { HiOutlineQrCode } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";

export default function SearchBar() {
    const { searchQuery, setSearchQuery } = useContext(TabContext);

    return (
        <div className="w-full px-4 sm:px-6 flex justify-between items-center text-black gap-2 sm:gap-4">
            <div className="flex-1 flex items-center bg-[#f3f4f6] rounded-lg border border-gray-300 shadow px-2 sm:px-3 py-1">
                {/* Search Icon */}
                <IoSearch className="text-[#FF690F] min-w-[18px]" size={18} />

                {/* Search Input */}
                <input
                    type="text"
                    className="w-full min-w-0 bg-transparent outline-none text-xs sm:text-sm px-2 sm:px-4 py-2"
                    placeholder="Search by Order No"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* QR-Code */}
                <button className="bg-[#e5e7eb] rounded-lg p-2 hover:bg-gray-300 transition">
                    <HiOutlineQrCode size={20} className="text-[#364153]" />
                </button>
            </div>

            {/* History */}
            <button className="flex flex-col justify-center items-center text-gray-800 hover:text-black transition">
                <IoTimeOutline className="size-4 sm:size-6" />
                <p className="font-thin text-[10px] sm:text-xs">History</p>
            </button>
        </div>
    );
}
