import { IoSearch } from "react-icons/io5";
import { TabContext } from "@/context/TabContext";
import { useContext } from "react";
import { HiOutlineQrCode } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";


export default function SearchBar() {
    const { searchQuery, setSearchQuery } = useContext(TabContext);
    return (
        <div className="w-full px-6 flex justify-between items-center text-black gap-x-2 sm:gap-x-4">
            <div className="w-full flex px-3 py-1 items-center bg-[#f3f4f6] rounded-lg border border-gray-300 shadow">
                {/* Search Icon */}
                <IoSearch className="text-[#FF690F] min-w-[18px]" size={18} />

                {/* Search Input */}
                <input
                    type="text"
                    className="rounded-4xl flex-1 min-h-7 py-3 px-4 text-left outline-none text-xs sm:text-sm"
                    placeholder="Search by Order No"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* QR-Code */}
                <div className="bg-[#e5e7eb] rounded-lg p-2">
                    <HiOutlineQrCode size={20} className="text-[#364153]"/>
                </div>
            </div>

            {/* History */}
            <div className="flex flex-col justify-center items-center space-x-1 text-gray-800">
                <IoTimeOutline size={24}/>
                <p className="font-thin text-xs">History</p>
            </div>
        </div>
    )
};
