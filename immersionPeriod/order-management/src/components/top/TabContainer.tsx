import { FaHistory } from "react-icons/fa";
import { TabContext, TabTypes } from "@/app/page";
import { useContext } from "react";
import { data } from "@/utils/data";
import { motion } from "framer-motion";

export default function TabContainer() {
    const { tabSelected, setTabSelected } = useContext(TabContext);
    return (
        
        <div className="w-full flex justify-between items-center space-x-4 select-none">
            <div className="w-full bg-[#F2F7F6] rounded-4xl px-4 py-2 min-h-8 flex justify-center items-center space-x-6">
                <Tab isSelected={tabSelected === TabTypes.New} txt="New" num={data.filter(item => item.status === TabTypes.New).length} changeTab={() => setTabSelected(TabTypes.New)} />
                <Tab isSelected={tabSelected === TabTypes.Cooking} txt="Cooking" num={data.filter(item => item.status === TabTypes.Cooking).length} changeTab={() => setTabSelected(TabTypes.Cooking)} />
                <Tab isSelected={tabSelected === TabTypes.Ready} txt="Ready" num={data.filter(item => item.status === TabTypes.Ready).length} changeTab={() => setTabSelected(TabTypes.Ready)} />
            </div>
            <FaHistory className={` ${tabSelected === TabTypes.Done ? "text-[#FF690F]" : "text-[#7F7771]"} cursor-pointer hover:scale-105 hover:text-black hover:transition-all hover:ease-in-out`} onClick={() => setTabSelected(TabTypes.Done)}/>
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
        <div className="relative flex-1 text-center cursor-pointer px-4 py-2 text-nowrap font-medium" onClick={props.changeTab}>
            {props.isSelected && (
                <motion.div
                    className="absolute inset-0 bg-white shadow-xl rounded-4xl"
                    layoutId="tabBackground"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                />
            )}
            <p className={`relative text-sm ${props.isSelected ? "text-[#FF690F]" : "text-[#7F7771]"}`}>
                {props.txt} <span className="text-xs">({props.num})</span>
            </p>
        </div>
    );
};
