import { TabContext } from "@/context/TabContext";
import { TabTypes } from "@/utils/tabTypes";
import { useContext } from "react";
import { data } from "@/utils/data";
import { motion } from "framer-motion";

export default function TabContainer() {
    const { tabSelected, setTabSelected } = useContext(TabContext);
    return (
        <div className="w-full flex justify-between items-center space-x-4 select-none">
            <div className="flex-1 min-h-8 grid grid-cols-3 gap-x-4 sm:gap-x-6 flex-wrap sm:flex-nowrap">
                <Tab isSelected={tabSelected === TabTypes.New} txt="New" num={data.filter(item => item.status === TabTypes.New).length} changeTab={() => setTabSelected(TabTypes.New)} />
                <Tab isSelected={tabSelected === TabTypes.Cooking} txt="Cooking" num={data.filter(item => item.status === TabTypes.Cooking).length} changeTab={() => setTabSelected(TabTypes.Cooking)} />
                <Tab isSelected={tabSelected === TabTypes.Ready} txt="Ready" num={data.filter(item => item.status === TabTypes.Ready).length} changeTab={() => setTabSelected(TabTypes.Ready)} />
            </div>
            {/* <FaHistory className={` ${tabSelected === TabTypes.Done ? "text-[#FF690F]" : "text-[#7F7771]"} cursor-pointer hover:scale-105 hover:text-black hover:transition-all hover:ease-in-out`} onClick={() => setTabSelected(TabTypes.Done)}/> */}
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
                    className="absolute bottom-0 left-0 right-0 bg-[#FF690F] h-1"
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
