import { IoSearch } from "react-icons/io5";
import { TabContext } from "@/context/TabContext";
import { useContext } from "react";


export default function SearchBar() {
    const { searchQuery, setSearchQuery } = useContext(TabContext);
    return (
        <div className="w-full flex justify-center items-center text-black gap-x-2 sm:gap-x-4">
            <IoSearch className="text-[#696969] min-w-[18px]" size={18} />

            <input 
                type="text" 
                className="rounded-4xl bg-[#F2F7F6] flex-1 min-h-7 py-3 px-4 text-left outline-none text-xs sm:text-sm" 
                placeholder="Search by Order No" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}    
            />
        </div>
    )
};
