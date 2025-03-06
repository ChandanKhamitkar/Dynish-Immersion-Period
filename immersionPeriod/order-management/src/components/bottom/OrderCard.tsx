import { PiTimerBold } from "react-icons/pi";
import { TabTypes } from "@/app/page";

type FoodItem = {
    name: string;
    quantity: number
}

interface OrderCardProps {
    orderID: string;
    dateTime: string;
    status: TabTypes;
    items: FoodItem[];
    prepTime: string;
    amount: number;
    updateOrderStatus: (orderID: string) => void;
}

export default function OrderCard(props: OrderCardProps) {
    const updateOrderStatus = () => {
        
    }
    return (
        <div className="w-full h-fit px-5 py-3 flex flex-col justify-start items-start rounded-xl text-left bg-white shadow-md">
            <p className="text-[#FF690F] font-medium text-base mb-1"><span>{props.orderID}</span> <span className="text-[#78736F]">|</span> <span className="text-[#78736F] text-xs">Take away</span></p>

            <p className="text-[#78736F] text-xs font-light mb-2">{props.dateTime}</p>

            <ul className="ml-4 mb-3">
                {
                    props.items.map((item, index) => <li key={index} className="text-black font-medium list-disc text-wrap">{item.name} <span className="text-[#7F7771] font-semibold">x{item.quantity}</span></li>)
                }
            </ul>

            <div className="w-full flex justify-between items-center">
                <p className="flex space-x-2"><span><PiTimerBold className="text-[#78736F]" size={16} /> </span> <span className="text-black text-xs">{props.prepTime}</span></p>

                <p className="text-[#FF690F] font-semibold ">{props.amount}/-</p>
            </div>

            {/* Divider */}
            <div className="w-[80%] h-[2px] mx-auto bg-[#968F89]/[0.8] rounded-4xl  my-5"></div>

            {/* Actions buttons */}
            <div 
                onClick={() => props.updateOrderStatus(props.orderID)}
                className={`px-5 py-2 rounded-lg ${props.status === 'New' ? "bg-[#2B7FFF]/[0.3] text-[#2B7FFF]" : props.status === 'Cooking' ? "bg-[#F4B400]/[0.3] text-[#F4B400]" : props.status === 'Ready' ? "bg-[#34A853]/[0.3] text-[#34A853]" : ""}  text-sm font-semibold cursor-pointer tracking-wide self-end`}>
                {props.status === 'New' ? "Start" : props.status === 'Cooking' ? "Ready" : props.status === 'Ready' ? "Complete" : ""}</div>
        </div>
    );
};
