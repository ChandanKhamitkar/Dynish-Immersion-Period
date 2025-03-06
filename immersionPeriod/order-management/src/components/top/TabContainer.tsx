import { TabContext, TabTypes  } from "@/app/page";
import { useContext } from "react";
import { data } from "@/utils/data";

export default function TabContainer() {
    const {tabSelected, setTabSelected} = useContext(TabContext);
    return (
        <div className="w-full bg-[#F2F7F6] rounded-4xl px-4 py-2 min-h-8 flex justify-center items-center space-x-6">
            <Tab isSelected={tabSelected === TabTypes.New} txt="New" num={data.filter(item => item.status === tabSelected).length} changeTab={() => setTabSelected(TabTypes.New)} />
            <Tab isSelected={tabSelected === TabTypes.Cooking} txt="Cooking" num={data.filter(item => item.status === tabSelected).length} changeTab={() => setTabSelected(TabTypes.Cooking)} />
            <Tab isSelected={tabSelected === TabTypes.Ready} txt="Ready" num={data.filter(item => item.status === tabSelected).length} changeTab={() => setTabSelected(TabTypes.Ready)} />
        </div>
    );
}

interface TabProps {
    isSelected: boolean;
    txt: string;
    num: number;
    changeTab: () => void;  
}

const Tab = (props: TabProps) => {
    return (
        <div 
            className={`flex-1 ${props.isSelected ? "bg-white text-[#FF690F] shadow-xl" : "bg-none text-[#7F7771]"} rounded-4xl font-medium text-center cursor-pointer  px-4 py-2 text-nowrap `}
            onClick={props.changeTab} 
        >
            <p className="text-sm">{props.txt} <span className="text-xs">({props.num})</span></p>
        </div>
    );
};
