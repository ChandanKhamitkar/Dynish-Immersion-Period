import Nav from "@/components/top/Nav";
import SearchBar from "./top/SearchBar";
import TabContainer from "./top/TabContainer";

export default function Top() {
    return (
        <div className="w-full h-fit border-b shadow-xl pt-6 bg-white flex flex-col justify-between items-center space-y-6">
            <Nav />
            <SearchBar />
            <TabContainer />
        </div>
    )
};
