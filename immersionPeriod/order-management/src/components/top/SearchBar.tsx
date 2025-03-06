import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
    return(
        <div className="w-full flex justify-center items-center text-black space-x-4">
            <IoSearch className="text-[#696969]" size={18}/>

            <input type="text" className="rounded-4xl bg-[#F2F7F6] flex-1 min-h-7 py-3 px-4 text-left outline-none text-sm" placeholder="Search by Order No" />
        </div>
    )
};
